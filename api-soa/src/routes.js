const express =require('express')

const ClienteController = require('./controllers/ClienteController');
const DevController = require('./controllers/DevController');
const ProjetoController = require('./controllers/ProjetoController');

const routes = express.Router();

routes.get('/clientes', ClienteController.index);
routes.post('/clientes', ClienteController.store);
routes.put('/clientes/:id_projeto/aprovar', ClienteController.aprovar);

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:id_projeto', DevController.associate);

routes.get('/projetos', ProjetoController.index);
routes.post('/projetos/:id_cliente', ProjetoController.store);
routes.delete('/projetos/:id_projeto/deletar', ProjetoController.deletar);

module.exports = routes;