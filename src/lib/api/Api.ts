import axios from "axios";

class RequestConfig {
  public baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }
}

const base = () => {
  const requestConfig = new RequestConfig(process.env.API_HOST);

  return axios.create(requestConfig);
};

export default base;
