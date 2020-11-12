<template>
  <ul v-if="posts.length">
    <PostItem v-for="(post) in posts"
              v-bind:item="post"
              v-bind:key="post.id"
    ></PostItem>
  </ul>
  <p v-else>В данный момент пусто</p>
</template>

<script lang="ts">

import Vue, { PropOptions } from 'vue'
import { Post } from '@/interface'
import PostItem from '@/components/posts/PostItem.vue'

const PostList = Vue.extend({
  name: 'PostList',
  props: {
    posts: {
      type: Array
    } as PropOptions<Array<Post>>
  },
  components: {
    PostItem
  }
})

export default PostList
</script>
