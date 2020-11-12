import { Module } from 'vuex'
import { Post, PostState } from '@/interface'

// null так как в root нету state
const PostStore: Module<PostState, null> = {
  state: {
    posts: Array<Post>()
  },
  mutations: {
    updatePosts (ctx, res: Array<Post>) {
      ctx.posts = res
    },
    editStatusPost (ctx, post: Post) {
      post.status = !post.status
    }
  },
  actions: {
    async downloadPosts ({ state, commit }) {
      let posts: Array<Post> = []
      if (!state.posts.length) {
        const res = await fetch(
          'https://next.json-generator.com/api/json/get/4yL6UMrKF'
        )
        posts = await res.json()
      } else {
        posts = state.posts
      }

      posts = await posts.map(i => {
        if (i.status === undefined) {
          i.status = true
        }
        return i
      })
      commit('updatePosts', posts)
    }
  },
  getters: {
    allPost (state): Array<Post> {
      return state.posts
    }
  }
}

export default PostStore
