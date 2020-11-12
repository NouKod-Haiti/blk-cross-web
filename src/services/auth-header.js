export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    // For Spring Boot back-end
    return { 'X-BLK-CROSS-KEY': process.env.REACT_APP_KEY };
    // {axios
    //   .post(process.env.REACT_APP_API + '/users/signup', state, {
    //     headers: {
    //       'X-BLK-CROSS-KEY': process.env.REACT_APP_KEY,
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //   })
    // }

    // { Authorization: "Bearer " + user.accessToken };

    // for Node.js Express back-end
    // return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
