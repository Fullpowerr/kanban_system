import axios from "axios";

export const requestProducts = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 1000,
});
