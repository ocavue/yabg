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
      <router-view/>
    </main>
  </mdc-layout-app>
</template>

<script>

export default {
  name: 'app',
  data () { return {} }
}
</script>

<style lang="scss">
@import "theme.scss";
@import "const.scss";

body {
  margin: 0;
  background: #fafafa;
}
.app-drawer-header{
  background: lightblue;  // TODO
}
.app-content {
  padding: $small-margin;
  @media screen and (min-width: $break-small) {
    padding: $big-margin;
  }
}
.app-drawer > nav  {
  overflow: scroll;
  position: fixed;
}
</style>
