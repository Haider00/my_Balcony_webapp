import axios from "axios";
const url = "http://192.168.18.29:4000/api";
// const url = "http://172.105.159.234:3000/api";

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
    console.log("DATA.....", payload);
    const { data } = await axios.post("/user/login", payload, config);
    console.log("DATA.....", data);
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
    const data = await axios.get(`/chat${payload.query}`, config);
    return data;
  }

  async getMessages(payload) {
    const data = await axios.get(`/message${payload.query}`, config);
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
    const { data } = await axios.post("/workSapce", payload, config);
    return data;
  }

  async createWorkingTimes(payload) {
    const { data } = await axios.post("/workingTimes", payload, config);
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
}

export const api = new Api();
