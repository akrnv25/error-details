const express = require('express');
const itemsController = require('../controllers/items.controller');

const router = express.Router();

router.get('/items', itemsController.get.bind(itemsController));

module.exports = router;
