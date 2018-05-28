const pigLatinModel = require('../models/pigLatinModels');

const pigLatinController = {
  get: ((req, res) => {
    pigLatinModel.get((err, results) => {
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
    console.log(req.session);
    pigLatinModel.post(req.body.input, req.body.output, req.session.username, (err, results) => {
      if (err) {
        console.log('error posting data', err);
        res.status(304).send(err.message);
      } else {
        console.log('POST request successful');
        res.status(201).send();
      }
    })
  })
}

module.exports = {
  pigLatinController: pigLatinController
};