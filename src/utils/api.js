import axios from "axios";
// const url = "http://192.168.100.61:3000/api";
// const url = "http://172.105.159.234:3000/api";
const url = "http://192.168.1.3:3000/api";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};
axios.defaults.baseURL = url;
class Api {
  async setToken(payload) {
    config.headers.Authorization = payload.token;
    return "token";
  }
  async userLogin(payload) {
    // console.log("DATA.....", payload);
    const { data } = await axios.post("/user/login", payload, config);
    // console.log("DATA.....", data);
    return data;
  }
  async userRegistration(payload) {
    const { data } = await axios.post("/user/register", payload, config);
    return data;
  }

  async userReauthentication(payload) {
    const data = await axios.post("/user/reauthenticate", payload, config);
    return data;
  }

  async editUser(payload) {
    const { data } = await axios.patch(`/user/${payload._id}`, payload, config);
    return data;
  }

  async createChat(payload) {
    const data = await axios.post("/chat", payload, config);
    return data;
  }

  async getChats(payload) {
    // console.log('>>>>>>',`/chat${payload}`)
    const data = await axios.get(`/chat${payload}`, config);
    return data;
  }

  async getMessages(payload) {
    // console.log('api>>>',payload);
    const data = await axios.get(`/message${payload}`, config);
    return data;
  }

  async createMessage(payload) {
    const data = await axios.post("/message", payload, config);
    return data;
  }
  async sendOTP(payload) {
    const { data } = await axios.post("/email/send", payload, config);
    return data;
  }
  async verifyOTP(payload) {
    const { data } = await axios.post("/email/verify", payload, config);
    return data;
  }
  async resendOtp(payload) {
    const { data } = await axios.post("/email/resend", payload, config);
    return data;
  }

  async resetPasswor(payload) {
    const { data } = await axios.patch("/reset/password", payload, config);
    return data;
  }
  async createWorkSpace(payload) {
    console.log('pppppppp>>>',payload)
    const { data } = await axios.post("/workSpace", payload, config);
    return data;
  }

  async createWorkingTimes(payload) {
    // console.log('createWorkingTime>>>',payload)
    const { data } = await axios.post("/workingTimes", payload, config);
    return data;
  }
  async getWorkingTime(payload) {
    const { query = "" } = payload;
    const { data } = await axios.get(`/workingTimes${query}`, config);
    return data;
  }

  async createBooking(payload) {
    const { data } = await axios.post("/booking", payload, config);
    return data;
  }

  async getWorkSpace(payload) {
    const { query = "" } = payload;
    const { data } = await axios.get(`/workSpace${query}`, config);
    return data;
  }

  async uploadImage(payload) {
    const { data } = await axios.post("/file", payload, config);
    return data;
  }
  async getBooking(payload) {
    const { query = "" } = payload;
    const { data } = await axios.get(`/booking${query}`, config);
    return data;
  }

  async patchFile(payload) {
    const { data } = await axios.patch(`/file/${payload._id}`, payload, config);
    return data;
  }

  async attachCard(payload) {
    console.log('payload',payload);
    const data = await axios.post("/customer_attach_card", payload, config);
    return data;
  }
  async getCard(payload) {
    console.log('payload',payload)
    const { query = "" } = payload;
    console.log('query', query)
    const { data } = await axios.get(`/cards${query}`, payload, config);
    return data;
  }
  async editBooking(payload) {
    const {data} = await axios.patch(`/booking/${payload._id}`, payload, config);
    return data;
  }
  async createPlanner(payload) {
    console.log('papapapa>>>>',payload)
    const { data } = await axios.post("/planner", payload, config);
    return data;
  }
  async getPlanner(payload) {
    console.log('api>>>',payload);
    const {data} = await axios.get(`/planner${payload}`, config);
    return data;
  }
}

export const api = new Api();
