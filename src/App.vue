<template>
  <mdc-layout-app class="app">
    <mdc-toolbar class="app-toolbar" slot="toolbar" fixed>
      <mdc-toolbar-row>
        <mdc-toolbar-section align-start>
          <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
          <mdc-toolbar-title>Drawer Exemple</mdc-toolbar-title>
        </mdc-toolbar-section>
      </mdc-toolbar-row>
    </mdc-toolbar>

    <mdc-drawer class="app-drawer" slot="drawer" toggle-on="toggle-drawer">
      <mdc-drawer-header class="app-drawer-header">
        TODO
      </mdc-drawer-header>
      <mdc-drawer-list>
        <mdc-drawer-item href="#" start-icon="inbox">TODO</mdc-drawer-item>
        <mdc-drawer-item href="#" start-icon="send">TODO</mdc-drawer-item>
        <mdc-drawer-item href="#" start-icon="drafts">TODO</mdc-drawer-item>
      </mdc-drawer-list>
    </mdc-drawer>

    <main class="app-content">
      <div class="app-content-card-containter">
        <mdc-card v-for="(post, index) in posts" :key="index" class="app-content-card" dark>
          <a class="app-content-card-link" :href="post.href">
            <mdc-card-media class="app-content-card--background" :height="320" :src="img">
              <mdc-card-header class="app-content-card--title" :title="post.title" />
            </mdc-card-media>
          </a>
        </mdc-card>
      </div>
    </main>
  </mdc-layout-app>
</template>

<script>
import posts from './assets/posts_info.json'

export default {
  name: 'app',
  data () {
    return {
      posts: posts,
      img: './src/assets/cat-1285634_640.png',
    }
  }
}
</script>

<style lang="scss">
@import "theme.scss";

body {
  margin: 0;
  background: $mdc-theme-background;
}
.app-drawer-header{
  background: lightblue;  // TODO
}
.app-content {
  margin: 16px;
}
.app-content-card {
  background: white;
  width: 100%;
  max-width: 600px;
  margin: 16px;
}
.app-content-card--title{
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5));
  font-size: 2em;
  color: white;
}
.app-content-card--background {
  padding: 0;
}
.app-content-card-containter{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.app-content-card-link:link
.app-content-card-link:visited
.app-content-card-link:hover
.app-content-card-link:active {
  text-decoration: none;
  // seem useless
}
</style>
