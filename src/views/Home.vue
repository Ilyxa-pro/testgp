<template>
  <div class="home">
    <div class="cols">
      <div class="col">
        <div class="colBlock">
          <post-list v-bind:posts="allPost | operationFilter(true, textSearch1)"/>
        </div>
        <div class="inputBlock">
          <input type="text" v-model="textSearch1" placeholder="Введите строчку для поиска">
        </div>
      </div>
      <div class="col">
        <div class="colBlock">filteredPost
          <post-list v-bind:posts="allPost | operationFilter(false, textSearch2)"/>
        </div>
        <div class="inputBlock">
          <input type="text" v-model="textSearch2" placeholder="Введите строчку для поиска">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PostList from '@/components/posts/PostList.vue'
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { Post } from '@/interface'

const Home = Vue.extend({
  data: function () {
    return {
      textSearch1: '',
      textSearch2: ''
    }
  },
  computed: {
    ...mapGetters(['allPost', 'filteredPost'])
  },
  methods: {
    ...mapActions(['downloadPosts'])
  },
  filters: {
    operationFilter: function (value: Array<Post>, status: boolean, search: string): Array<Post> {
      value = value.filter(i => {
        if (status) {
          return i.status === status || i.status === undefined
        } else {
          return i.status === status && i.status !== undefined
        }
      })
      if (search && search.length) {
        value = value.filter(i => {
          let subWeight = 0
          if (i.items.length) {
            i.items.forEach(sub => {
              subWeight += sub.name.toLocaleLowerCase().split(search.toLocaleLowerCase()).length - 1
            })
          }
          i.weight = (i.name.toLocaleLowerCase().split(search.toLocaleLowerCase()).length - 1) + subWeight
          return i.weight
        }).sort((a: Post, b: Post) => {
          if (a.weight !== undefined && b.weight !== undefined) {
            return b.weight - a.weight
          }
          return 0
        })
      }
      return value
    }
  },
  mounted () {
    this.downloadPosts()
  },
  components: {
    PostList
  }
})

export default Home
</script>

<style lang="scss">
  .cols {
    display: flex;
    .col {
      flex: 0 0 50%;
      padding: 0 20px;
      box-sizing: border-box;
      .colBlock {
        height: 50vh;
        overflow: auto;
        padding: 0 20px;
        box-sizing: border-box;
      }
      .inputBlock {
        margin-top: 40px;
        input {
          text-align: left;
          padding: 8px 15px;
          line-height: 24px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #2c3e50;
          width: 100%;
          box-sizing: border-box;
        }
      }
      ul {
        padding: 0;
        margin: 0;
      }
    }
  }
</style>
