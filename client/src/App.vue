<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header />
    <HomeComponent />
    <!-- <PostComponent msg="Welcome to Your Vue.js App"/> -->
    <Footer />
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue'

export default {
  name: 'app',
  components: {
    PostComponent,
    HomeComponent,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
