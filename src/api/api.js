import querystring from "query-string";
import axios from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

const Api = {
  get: url => {
    return axios.get(`${API_ENDPOINT}/${url}`).then(res => res.data);
  }
};

export default Api;
