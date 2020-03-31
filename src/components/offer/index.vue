<template>
  <v-container mt-4 color="black" fluid>
    <v-row align="center">
      <v-col cols="2" class="ml-2">
        <v-row justify="center"></v-row>
      </v-col>
      <v-col cols="9">
        <v-row></v-row>
      </v-col>
    </v-row>
    <v-divider />
    <v-layout ml-3 mb-3 row wrap>
      <v-flex mt-5 pr-4 xs12 sm9>
        <h3 class="mb-3">Apresentação</h3>
      </v-flex>
      <v-divider vertical />
      <v-flex mt-5 pl-5 xs12 sm2>
        <h4>Valor a ser arrecadado</h4>

        <h4>Ramo da empresa</h4>

        <h4>Tipo de oferta</h4>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  font-size: 16px;
}
.logo {
  max-width: 150px;
  max-height: 200px;
}
</style>