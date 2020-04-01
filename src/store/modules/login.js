import Api from '../../api';

const Login = {
  namespaced: true,
  state: {
    user: '',
    token: localStorage.getItem('token') || '',
    status: null
  },
  mutations: {
    auth_request(state) {
      state.status = "loading"
    },
    auth_success(state, token, user_id) {
      state.status = "success"
      state.token = token
      state.user = user_id
    },
    auth_error(state) {
      state.status = "failure"
      state.token = ''
      state.user = 0
    },
    auth_logout(state) {
      state.status = null
      state.token = ''
      state.user = ''
    }
  },
  actions: {
    loginAction({ commit }, userDetails) {
      commit('auth_request')
      return new Promise((resolve, reject) => {
        Api.Login.login(userDetails)
          .then(response => {
            const token = response.token
            const user = response.user_id
            localStorage.setItem('token', token)
            commit('auth_success', token, user)

            resolve(response)
          })
          .catch(error => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(error)
          })
      })
    },
    logoutAction({ commit }) {
      commit('auth_logout')
      localStorage.removeItem('token')
    }
  },
  getters: {
    isLoggedIn: state => state.token != '',
    user: state => state.user,
    status: state => state.status,
    token: state => state.token
  }
};

export default Login;