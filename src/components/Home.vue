<template>
  <div class="app-content-card-containter">
    <mdc-card v-for="(post, index) in posts" :key="index" class="app-content-card" dark>
      <a class="app-content-card--link" :href="post.href">
        <mdc-card-media class="app-content-card--background" :height="320" :src="img">
          <mdc-card-header class="app-content-card--title" :title="post.title" />
        </mdc-card-media>
      </a>
    </mdc-card>
  </div>
</template>

<script>
import posts from '../assets/posts_info.json'
import img from '../assets/cat-1285634_640.png'

export default {
  name: 'Home',
  data () {
    return {
      posts: posts,
      img: img,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../const.scss";

.app-content-card {
  background: white;
  width: 100%;
  max-width: 600px;
  margin-bottom: $small-margin;
    @media screen and (min-width: $break-small) {
      margin-bottom: $big-margin;
  }

  &--background {
    padding: 0;
  }
  &--title {
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5));
  }
}
.app-content-card-containter{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
