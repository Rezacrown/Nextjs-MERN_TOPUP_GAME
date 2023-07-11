import axios from "axios";
import Errorhandler from "./errorHandler";
import { config } from "../../config/index";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
});

instance.interceptors.response.use(
  (res) => res.data,
  (err) => Errorhandler(err)
);

export default instance;
