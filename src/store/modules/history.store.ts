import { Module } from 'vuex'
import { HistoryPost, HistoryState, Post } from '@/interface'
// null так как в root нету state
const HistoryStore: Module<HistoryState, null> = {
  state: {
    history: Array<HistoryPost>()
  },
  mutations: {
    createHistory ({ history }, item: HistoryPost) {
      history.push(item)
    }
  },
  actions: {
    addedHistory ({ commit }, post: Post) {
      const item: HistoryPost = {
        id: post.id,
        name: post.name,
        operation: post.status ? 'added' : 'delete',
        date: Date.now()
      }
      commit('createHistory', item)
      commit('editStatusPost', post)
    }
  },
  getters: {
    allHistory (state): Array<HistoryPost> {
      return state.history
    }
  }
}

export default HistoryStore
