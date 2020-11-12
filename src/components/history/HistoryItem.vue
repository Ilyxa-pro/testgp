<template>
  <li class="item">
    <div class="date">
      {{new Date(item.date).toLocaleString("ru")}}
    </div>
    <div class="description">
      <div class="id">{{item.id}}</div>
      <div class="name">{{item.name}} - {{item.operation}}</div>
      <div class="operation">
        <span v-bind:class="{ 'btn delete disabled': item.operation === 'delete', 'btn added disabled': item.operation === 'added' }"
        ></span>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { HistoryPost } from '@/interface'
import Vue, { PropOptions } from 'vue'

const HistoryItem = Vue.extend({
  name: 'HistoryItem',
  props: {
    item: {
      type: Object
    } as PropOptions<HistoryPost>
  }
})

export default HistoryItem
</script>
