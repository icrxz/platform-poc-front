import http from "./http"

export default {
  async login(userDetails) {
    const response = await http.post("/login", userDetails)
    return response.data
  }
}