const express = require('express');
const path = require('path');
const parser = require('body-parser');
const helmet = require('helmet');
require('../db/config');

const app = express();
const PORT = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));

app.listen(PORT, () => console.log('Listening to server on PORT:', PORT));