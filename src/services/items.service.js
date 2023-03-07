const config = require('../config');
const axios = require('axios');
const BaseError = require('../models/BaseError');

class ItemsService {
  async get(id) {
    try {
      const url = `${config.apiUrl}/entries/${id}`; // it is an error (impossible to get by ID)
      const method = 'get';
      const { data } = await axios({ method, url });
      return { success: true, data };
    } catch (e) {
      const error = new BaseError({
        message: e.response.data,
        details: ['ItemsService.get', `id=${id}`]
      });
      return Promise.reject(error);
    }
  }

  async getAll() {
    try {
      const url = `${config.apiUrl}/entries?titleee=cat`; // it is an error (correct query title=cat)
      const method = 'get';
      const { data } = await axios({ method, url });
      return { success: true, data };
    } catch (e) {
      const error = new BaseError({ message: e.response.data, details: ['ItemsService.getAll'] });
      return Promise.reject(error);
    }
  }
}

module.exports = new ItemsService();
