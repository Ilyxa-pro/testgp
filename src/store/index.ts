import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import HistoryStore from '@/store/modules/history.store'
import PostStore from '@/store/modules/post.store'

Vue.use(Vuex)

// null так как в нету state
const store: StoreOptions<null> = {
  modules: {
    HistoryStore,
    PostStore
  }
}

export default new Vuex.Store(store)
