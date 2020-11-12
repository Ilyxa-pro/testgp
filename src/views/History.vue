<template>
  <div class="about">
    <h1>History</h1>
    <HistoryList v-bind:list="historyFiltered"></HistoryList>
  </div>
</template>

<script lang="ts">

import HistoryList from '@/components/history/HistoryList.vue'
import Vue, { PropOptions } from 'vue'
import { mapGetters } from 'vuex'
import { HistoryPost, operations } from '@/interface'

const History = Vue.extend({
  props: {
    info: {
      type: String,
      default () { return '' }
    } as PropOptions<operations>
  },
  computed: {
    ...mapGetters(['allHistory']),
    historyFiltered (): HistoryPost[] {
      let value: HistoryPost[] = this.allHistory
      if (this.info === 'added' || this.info === 'delete') {
        value = value.filter(i => { return i.operation === this.info })
      }
      return value
    }
  },
  components: {
    HistoryList
  }
})
export default History
</script>

<style>

</style>
