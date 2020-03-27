<template>
  <v-container>
    <v-flex md-12>
      <p class="title">Ofertas</p>
    </v-flex>
    <v-layout row wrap>
      <OfferList
        v-for="(offer, index) in offersList"
        :key="index"
        :id="parseInt(offer.id)"
        :name="offer.attributes.organization_name"
        :thumbnail="offer.attributes.organization_thumbnail_url"
        :value="parseFloat(offer.attributes.fundraise_target)"
      />
    </v-layout>
  </v-container>
</template>

<script>
import OfferList from "./_offers_list.vue";
import { mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {};
  },
  components: {
    OfferList
  },
  computed: mapState({
    offersList: state => state.Offers.offers
  }),
  mounted: function() {
    this.$store.dispatch("Offers/getOffers");
  }
};
</script>

<style scoped>
</style>