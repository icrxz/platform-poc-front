<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>
 
<script>
  import Header from './components/shared/header.vue'
  import Footer from './components/shared/footer.vue'
  import Sidebar from './components/shared/sidepanel.vue'
  
  export default {
    data () {
      return {
        drawer: false,
      }
    },
    components: {
      'Footer': Footer,
      'Header': Header,
      'Sidebar': Sidebar
    }
  }
</script>
 
<style>
  #app{
    background-color: #FFFFFF !important;
  }
</style>