const pigLatinModel = require('../models/pigLatinModels');

const pigLatinController = {
  get: ((req, res) => {
    pigLatinModel.get((err, results) => {
      if (err) {
        console.log('error posting data', err);
        res.status(400).send(err.message);
      } else {
        console.log('successfully posted');
        res.status(200).send(results);
      }
    })
  }),
  post: ((req, res) => {
    pigLatinModel.post(req.body.input, req.body.output, (err, results) => {
      if (err) {
        console.log('error posting data', err);
        res.status(304).send(err.message);
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