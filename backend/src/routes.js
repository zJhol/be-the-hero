// Importação do Express para ter acesso à suas respectivas funcionalidas
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// Desacoplando o módulo de rotas do Express e atribuindo em uma variável
const routes = express.Router();

//return response.send('Hello World');

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Exportar variável (rotas) de dentro de um arquivo (routes.js) para ser usado em outro (index.js)
module.exports = routes;