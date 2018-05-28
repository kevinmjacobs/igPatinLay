const userModel = require('../models/userModels');

const userController = {
  get: ((req, res) => {
    console.log(req.query);
    userModel.get(req.query.username, req.query.password, (err, results) => {
      if (err) {
        console.log('error getting data', err);
        res.status(400).send(err.message);
      } else {
        console.log('GET request successful');
        res.status(200).send(results);
      }
    })
  }),
  post: ((req, res) => {
    userModel.post(req.body.input, req.body.output, (err, results) => {
      if (err) {
        console.log('error posting data', err);
        res.status(304).send(err.message);
      } else {
        console.log('POST request successful');
        res.status(201).send(results);
      }
    })
  })
}

module.exports = {
  userController: userController
};