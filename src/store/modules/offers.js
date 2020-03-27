import Api from '../../api';

const Offers = {
  namespaced: true,
  state: {
    offers: [],
    offer: null
  },
  mutations: {
    setOffers(state, offers) {
      state.offers = offers.data;
    },
    setOffer(state, offer) {
      state.offer = offer.data;
    }
  },
  actions: {
    getOffers(context) {
      Api.Offer.index()
        .then(response => response.data)
        .then(offers => {
          context.commit('setOffers', offers)
        }).catch(function (error) {
          console.log(error);
        });
    },
    getOffer(context, id) {
      Api.Offer.show(id)
        .then(response => response.data)
        .then(offer => {
          context.commit('setOffer', offer)
        }).catch(function (error) {
          console.log(error);
        });
    }
  }
};

export default Offers;