const { Conversion } = require('../../db/schemas');
const { translateSentence } = require('../../helpers/pigLatinTranslator');

module.exports = {
  get: () => {},
  post: (input, callback) => {
    Conversion.create({
      input: input,
      output: translateSentence(input)
    })
    .then((res) => {
      console.log('successfully created db record');
      console.log('results from create', res);
      callback(null, res);
    })
    .catch((err) => {
      console.log('error created db record,', err);
      callback(err, null);
    });
  }
}