const userModel = require('../models/userModels');

const userController = {
  get: ((req, res) => {
    userModel.get(req.query.username, req.query.password, (err, result) => {
      if (err) {
        console.log('error getting data', err);
        res.status(400).send(err.message);
      }
      console.log('GET request successful');
      console.log(result.dataValues);
      if (result) {
        req.session.username = result.dataValues.username;
      }
      res.status(200).send(result);
    })
  }),
  post: ((req, res) => {
    userModel.post(req.body.username, req.body.password, (err, results, created) => {
      if (err) {
        console.log('error posting data', err);
        res.status(304).send(err.message);
      } else {
        if (created) {
          console.log('POST request created new user');
          res.status(201).send(results);
        } else {
          console.log('POST request did not create new user - already exists');
          res.status(304).send(results);  
        }
      }
    })
  })
}

module.exports = {
  userController: userController
};