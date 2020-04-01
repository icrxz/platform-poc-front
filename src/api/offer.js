import Http from './http';

export default {
  async index() {
    const response = await Http.get('/fundraise_offers')
    return response
  },
  async show(id) {
    const response = await Http.get('/fundraise_offers/' + id)
    return response
  }
}