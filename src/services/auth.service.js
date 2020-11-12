import axios from "axios";

const API_URL = 'http://localhost:3000/api/v1/';

const register = (
  name,
  email,
  password,
  passwordConfirmation,
  organization
) => {
  return axios.post(
    API_URL + 'users/signup',
    {
      name,
      email,
      password,
      passwordConfirmation,
      organization,
    },
    {
      headers: {
        'X-BLK-CROSS-KEY': process.env.REACT_APP_KEY,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
};

const login = (email, password) => {
  return axios
    .post(
      API_URL + 'users/login',
      {
        email,
        password,
      },
      {
        headers: {
          'X-BLK-CROSS-KEY': process.env.REACT_APP_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      // if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
      // }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
