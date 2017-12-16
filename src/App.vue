<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Posts Links</h2>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <a :href="post.href">{{post.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import posts from './assets/posts_info.json'

export default {
  name: 'app',
  data () {
    return {
      posts: posts,
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
