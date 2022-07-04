import Axios from "axios";

const axios = Axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'bff9778942d068a2dc27d31d64fa0255',
    language: 'vi-VN'
  }
});

export { axios }