const router = require('express').Router();
const { pigLatinController } = require('../controllers/pigLatinControllers');

router.get('/convert', pigLatinController.get);
router.post('/convert', pigLatinController.post);

module.exports = {
  router: router
};