<template>
  <v-flex xs12 sm4 md3 lg3 mb-5>
    <router-link :to="'/offer/'+id">
      <v-card class="mx-auto" width="200" height="250">
        <v-responsive class="py-3 px-3">
          <v-img :src="thumbnail" class="thumbnail" />
        </v-responsive>
        <v-card-title text-center>{{name}}</v-card-title>
        <v-card-subtitle>R$ {{value.toFixed(2)}}</v-card-subtitle>
      </v-card>
    </router-link>
  </v-flex>
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    },
    name: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>