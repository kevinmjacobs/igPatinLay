const userListModel = require('../models/userListModels');

const userListController = {
  get: ((req, res) => {
    console.log('user list req',req);
    userListModel.get(req.session.username, (err, result) => {
      if (err) {
        console.log('error getting data', err);
        res.status(400).send(err.message);
      }
      console.log('GET request successful', result);
      res.status(200).send(result);
    })
  })
}

module.exports = {
  userListController: userListController
}