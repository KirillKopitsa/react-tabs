import axios from 'axios';

import { ParseUtils } from '../../utils/ParseUtils';

class APIService {
  constructor() {
    this.axios = this.axios.bind(this);
    this.get = this.get.bind(this);
  }

  axios() {
    return axios.create({
      'Content-Type': 'application/json',
    });
  }

  async get(url) {
    try {
      const result = await this.axios().get(url);
      const data = ParseUtils.parseData(result);
      return data;
    } catch (e) {
      const error = ParseUtils.parseError(e);
      return error;
    }
  }
}

const ServiceInstanCe = new APIService();

export { ServiceInstanCe as APIService };
