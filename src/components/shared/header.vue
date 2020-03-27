<template>
  <v-app-bar flat short color="white" app>
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link to="/">
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
          <v-list-item>
            <v-list-item-title>
              <a href="#">Details</a>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <a href="#">Logout</a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>
  
<script>
import Logo from "../../assets/logo.png";
export default {
  data() {
    return {
      logo: Logo
    };
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