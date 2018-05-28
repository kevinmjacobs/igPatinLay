const router = require('express').Router();
const { pigLatinController } = require('../controllers/pigLatinControllers');
const { userController } = require('../controllers/userControllers');

router.get('/convert', pigLatinController.get);
router.post('/convert', pigLatinController.post);

router.get('/user', userController.get);
router.post('/user');

module.exports = {
  router: router
};