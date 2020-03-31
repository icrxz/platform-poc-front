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
  
  export default {
    data () {
      return {
        drawer: false,
      }
    },
    components: {
      'Footer': Footer,
      'Header': Header
    }
  }
</script>
 
<style>
  #app{
    background-color: #FFFFFF !important;
  }
</style>