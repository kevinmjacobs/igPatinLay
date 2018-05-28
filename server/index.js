const express = require('express');
const session = require('express-session');
const path = require('path');
const parser = require('body-parser');
const helmet = require('helmet');
const { router } = require('./routers');
require('../db/config');

const app = express();
const PORT = 3000;

app.use(helmet());
app.use(session({
  secret: 'shhhhhhh'
}))

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));

app.use('/api', router);

app.listen(PORT, () => console.log('Listening to server on PORT:', PORT));