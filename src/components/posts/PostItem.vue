<template>
  <li class="item">
    <div class="description">
      <div class="id">{{item.id}}</div>
      <div class="name">{{item.name}}</div>
      <div class="operation">
        <span @click="operationToggle(item)"
              v-bind:class="{ 'btn delete': !item.status, 'btn added': item.status || item.status === undefined }"
        ></span>
      </div>
    </div>
    <div class="itemsSub" v-if="item.items.length">
      <ul class="itemsSubList">
        <li class="itemSub" v-for="sub in item.items" v-bind:key="''+item.id+sub.id">
          <div class="itemWrapper">
            <div class="id">{{sub.id}}</div>
            <div class="name">{{sub.name}}</div>
          </div>
        </li>
      </ul>
    </div>
  </li>
</template>

<script lang="ts">
import { Post } from '@/interface'
import Vue, { PropOptions } from 'vue'
import { mapActions } from 'vuex'

const PostItem = Vue.extend({
  name: 'PostItem',
  props: {
    item: {
      type: Object
    } as PropOptions<Post>
  },
  methods: {
    ...mapActions(['addedHistory']),
    operationToggle (item: Post) {
      this.addedHistory(item)
    }
  }
})

export default PostItem
</script>

<style lang="scss">
.item {
  border-bottom: 1px solid #2c3e50;
  display: block;
  padding: 15px 0;
  margin: 0;
  .itemsSub {
    padding-top: 10px;
  }
  .itemsSubList {
    padding: 0 0 0 30px;
    border-top: 1px dashed #2c3e50;
    .itemSub {
      display: block;
      &+.itemsSub {
        border-top: 1px dashed #2c3e50;
      }
      .itemWrapper {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        .id {
          margin-right: 20px;
        }
        .name {
          font-size: 16px;
        }
      }
    }
  }
  .description {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .id {
      font-weight: bold;
    }
    .name {
      font-size: 20px;
      line-height: 1.2;
      font-style: italic;
    }
    .operation .btn {
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #2c3e50;
      color: #fff;
      cursor: pointer;
      line-height: 30px;
      text-align: center;
      font-weight: bold;
      &:not(.disabled):hover {
        background-color: #42b983;
      }
      &.added::before {
        content: "+"
      }
      &.delete::before {
        content: "-"
      }
      &.disabled {
        cursor: default;
      }
    }
  }
}
</style>
