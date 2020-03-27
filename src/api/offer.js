import Http from './http';

export default {
  index() {
    return Http.get('/fundraise_offers')
  },
  show(id) {
    return Http.get('/fundraise_offers/'+id)
  }
}