const itemsService = require('../services/items.service');
const BaseError = require('../models/BaseError');

class ItemsController {
  async get(req, res, next) {
    try {
      const itemsRes = await itemsService.get();
      res.status(200).json(itemsRes);
    } catch (e) {
      const error = new BaseError({ origin: e, details: 'ItemsController.get' });
      next(error);
    }
  }
}

module.exports = new ItemsController();
