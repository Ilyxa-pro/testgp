<template>
  <ul v-if="list.length">
    <HistoryItem v-for="(item, idx) in list"
              v-bind:item="item"
              v-bind:key="idx"
    ></HistoryItem>
  </ul>
  <p v-else>В данный момент пусто</p>
</template>

<script lang="ts">

import Vue, { PropOptions } from 'vue'
import { HistoryPost } from '@/interface'
import HistoryItem from '@/components/history/HistoryItem.vue'

const HistoryList = Vue.extend({
  name: 'HistoryList',
  props: {
    list: {
      type: Array,
      default () { return [] }
    } as PropOptions<HistoryPost[]>
  },
  components: {
    HistoryItem
  }
})

export default HistoryList
</script>
