<template>
  <v-footer height="auto" class="black">
    <v-flex xs12 md3 pt-2 text-center>
      <img :src="logo" class="logo" />
    </v-flex>
    <v-flex xs12 md6 pt-2 white--text text-center>
      <p>© BASEMENT 2020<br>By investors, developers and designers who love working and growing together!</p>
    </v-flex>
    <v-flex xs12 md3 pt-2 text-center>
      <img :src="cvm_logo" class="logo" />
    </v-flex>
  </v-footer>
</template>
 
<script>
import Logo from "../../assets/powered_by_white.png";
import CvmLogo from "../../assets/cvm_logo.png";

export default {
  data() {
    return {
      logo: Logo,
      cvm_logo: CvmLogo
    };
  }
};
</script>
 
<style scoped>
p{
  font-size: 12px;
}

.logo {
  max-height: 150px;
  max-width: 150px;
  height: auto;
  width: auto;
}
</style>