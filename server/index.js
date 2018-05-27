const express = require('express');
const path = require('path');
const parser = require('body-parser');
const helmet = require('helmet');
const { router } = require('./routers');
require('../db/config');

const app = express();
const PORT = 3000;

app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));

app.use('/api', router);

app.listen(PORT, () => console.log('Listening to server on PORT:', PORT));