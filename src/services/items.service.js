const config = require('../config');
const axios = require('axios');
const BaseError = require('../models/BaseError');

class ItemsService {
  async get() {
    try {
      const url = `${config.apiUrl}/entries?titgle=cat`;
      const method = 'get';
      const { data } = await axios({ method, url });
      return { success: true, data };
    } catch (e) {
      const error = new BaseError({ message: e.response.data, details: 'ItemsService.get' });
      return Promise.reject(error);
    }
  }
}

module.exports = new ItemsService();
