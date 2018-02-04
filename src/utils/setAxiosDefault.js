import axios from 'axios';

const setAxiosDefault = () => {
  axios.defaults.baseURL='https://api.github.com/';
  axios.defaults.headers['Accept'] = 'application/vnd.github.mercy-preview+json';
}

export default setAxiosDefault;
