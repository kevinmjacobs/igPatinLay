const router = require('express').Router();
const { pigLatinController } = require('../controllers/pigLatinControllers');
const { userController } = require('../controllers/userControllers');
const { userListController } = require('../controllers/userListControllers');

router.get('/convert', pigLatinController.get);
router.post('/convert', pigLatinController.post);

router.get('/user', userController.get);
router.post('/user', userController.post);

router.get('/userList', userListController.get);

module.exports = {
  router: router
};