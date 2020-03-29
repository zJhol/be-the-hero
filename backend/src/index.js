const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();

// Fazer o express entender Json
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

// Definindo a porta usada no localhost
app.listen(3333);