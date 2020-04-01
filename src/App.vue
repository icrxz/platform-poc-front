<template>
  <v-app>
    <Header />
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>
 
<script>
import { mapGetters } from "vuex";
import Header from "./components/shared/header.vue";
import Footer from "./components/shared/footer.vue";

export default {
  data() {
    return {
      drawer: false
    };
  },
  components: {
    Footer: Footer,
    Header: Header
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "Login/isLoggedIn",
      token: "Login/token",
      status: 'Login/status'
    })
  },
  created() {
    if (this.isLoggedIn) {
      this.$router.push("/home");
    } else {
      this.$router.push("/login");
    }
  }
};
</script>
 
<style>
#app {
  background-color: #ffffff !important;
}
</style>