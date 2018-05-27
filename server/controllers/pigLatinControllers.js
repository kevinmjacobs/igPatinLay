const pigLatinModel = require('../models/pigLatinModels');

const pigLatinController = {
  get: ((req, res) => {

  }),
  post: ((req, res) => {
    pigLatinModel.post(req.body.input, (err, results) => {
      if (err) {
        console.log('error posting data', err);
      } else {
        console.log('successfully posted');
        res.status(201).send(results);
      }
    })
  })
}

module.exports = {
  pigLatinController: pigLatinController
};