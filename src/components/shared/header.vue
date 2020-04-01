<template>
  <v-app-bar flat short color="white" app>
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link to="/home">
        <img :src="logo" class="logo" />
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-menu top>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>account_box</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-if="isLoggedIn">
            <v-btn text>Details</v-btn>
            <v-btn text @click="logout">Logout</v-btn>
          </v-list-item>
          <v-list-item v-else>
            <v-btn text>Login</v-btn>
            <v-btn text>Registrar</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import Logo from "../../assets/logo.png";
export default {
  data() {
    return {
      logo: Logo
    };
  },
  methods: {
    ...mapActions({
      logoutAction: "Login/logoutAction"
    }),
    logout() {
      this.logoutAction()
        .then(() => this.$router.push("/login"))
        .catch(err => console.log(err));
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "Login/isLoggedIn"
    })
  }
};
</script>
 
<style scoped>
.logo {
  width: 120px !important;
  margin-top: 15px;
}

a {
  text-decoration: none;
  color: white;
}
</style>