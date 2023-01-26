const itemsService = require('../services/items.service');
const BaseError = require('../models/BaseError');

class ItemsController {
  async get(req, res, next) {
    const id = req.params.id;
    try {
      const itemsRes = await itemsService.get(id);
      res.status(200).json(itemsRes);
    } catch (e) {
      const error = new BaseError({ origin: e, details: `ItemsController.get, id=${id}` });
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const itemsRes = await itemsService.getAll();
      res.status(200).json(itemsRes);
    } catch (e) {
      const error = new BaseError({ origin: e, details: 'ItemsController.getAll' });
      next(error);
    }
  }
}

module.exports = new ItemsController();
