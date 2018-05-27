const { Conversion } = require('../../db/schemas');
const { translateSentence } = require('../../helpers/pigLatinTranslator');

module.exports = {
  get: (callback) => {
    Conversion.findAll()
    .then((res) => {
      console.log('successfully retrieved db records');
      callback(null, res);
    })
    .catch((err) => {
      console.log('error retrieving db records,', err);
      callback(err, null);
    });
  },
  post: (input, callback) => {
    Conversion.create({
      input: input,
      output: translateSentence(input)
    })
    .then((res) => {
      console.log('successfully created db record');
      callback(null, res);
    })
    .catch((err) => {
      console.log('error created db record,', err);
      callback(err, null);
    });
  }
}