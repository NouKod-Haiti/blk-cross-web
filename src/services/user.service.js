import axios from "axios";
import authHeader from "./auth-header";

const signupUser = () => {
  return axios.post(process.env.REACT_APP_API + '/users/signup', { headers: authHeader() });
};
const loginUser = () => {
  return axios.post(process.env.REACT_APP_API + '/users/signup', { headers: authHeader() });
};

export default {
  signupUser,
  loginUser,
};