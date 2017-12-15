<template>
  <!-- 弹出音乐盒时，主页面整体左移 -->
  <div id="app" :class="{ 'move-left': isMove }">
    <div id="header">
      <gallery-header v-on:move='toggleMove'></gallery-header>
    </div>
    <!-- <router-view/> -->
    <div id="main">
      <router-view></router-view>
    </div>
    <!-- 弹出音乐盒时，主页面整体左移 -->
    <footer id='footer' :class="{ 'move-left': isMove }">
      <gallery-footer></gallery-footer>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import GalleryHeader from './components/GalleryHeader'
import GalleryFooter from './components/GalleryFooter'

export default {
  data() {
    return {
      isMove: false
    }
  },
  components: { GalleryHeader, GalleryFooter },
  methods: {
    toggleMove() {
      this.isMove = !this.isMove
    }
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #fafafa;
}

a {
  text-decoration: none;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
}

#app.move-left {
  margin-left: -20%;
}

#header {
  width: 100%;
  height: 69px;
}

#main {
  /*max-width: 965px;*/
  width: 100%;
  min-height: calc(100% - 70px);
  padding-top: 60px;
  overflow: hidden;
}

#footer {
  width: 100%;
  height: 48px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  display: none;
  transition: all 0.3s ease-in-out;
}

#footer.move-left {
  left: -20%;
}

@media screen and (max-width: 1010px) {
  #main {
    padding: 0;
  }
  #footer {
    display: block;
  }
}
</style>
