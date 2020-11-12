import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:3000/api/v1/';

const signupUser = () => {
  return axios.post(API_URL + '/users/signup', { headers: authHeader() });
};
const loginUser = () => {
  return axios.post(API_URL + '/users/signup', { headers: authHeader() });
};


// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

export default {
  signupUser,
  loginUser,
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};