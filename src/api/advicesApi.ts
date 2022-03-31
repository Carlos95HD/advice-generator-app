import axios from "axios";

export const advicesApi = axios.create({
  baseURL: "https://api.adviceslip.com",
});
