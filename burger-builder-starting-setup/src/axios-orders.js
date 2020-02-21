import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-eac8a.firebaseio.com/'
});

export default instance;