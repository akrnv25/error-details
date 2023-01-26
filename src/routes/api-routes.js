const express = require('express');
const itemsController = require('../controllers/items.controller');

const router = express.Router();

router.get('/items/:id', itemsController.get.bind(itemsController));
router.get('/items', itemsController.getAll.bind(itemsController));

module.exports = router;
