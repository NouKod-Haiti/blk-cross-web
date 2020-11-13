import axios from 'axios';

const register = (data) => {
  return axios.post(process.env.REACT_APP_API + '/users/signup', data, {
    headers: {
      'x-blk-cross-key': process.env.REACT_APP_KEY,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

const login = (data) => {
  return axios.post(process.env.REACT_APP_API + '/users/login', data, {
        headers: {
          'X-BLK-CROSS-KEY': process.env.REACT_APP_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
       console.log('wudlll', response);
      if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
