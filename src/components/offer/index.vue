<template>
  <v-container mt-4 color="black" fluid>
    <v-row align="center">
      <v-col cols="2" class="ml-2">
        <v-row justify="center">
          <v-img :src="offer.attributes.organization_thumbnail_url" class="logo" />
        </v-row>
      </v-col>
      <v-col cols="9">
        <v-row>
          <h2>{{offer.attributes.organization_name}}</h2>
        </v-row>
      </v-col>
    </v-row>
    <v-divider />
    <v-layout ml-3 mb-3 row wrap>
      <v-flex mt-5 pr-4 xs12 sm9>
        <h3 class="mb-3">Apresentação</h3>
        <span>{{offer.attributes.pitch_deck}}</span>
      </v-flex>
      <v-divider vertical />
      <v-flex mt-5 pl-5 xs12 sm2>
        <h4>Valor a ser arrecadado</h4>
        <p>R$ {{offer.attributes.fundraise_target}}</p>
        <h4>Ramo da empresa</h4>
        <p>{{offer.attributes.segment}}</p>
        <h4>Tipo de oferta</h4>
        <p>{{offer.attributes.offer_type}}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  methods: {
    ...mapActions({
      getOffer: "Offers/getOffer"
    })
  },
  computed: {
    ...mapState({
      offer: state => state.Offers.offer
    })
  },
  mounted: function() {
    this.getOffer(this.$route.params.id);
  }
};
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