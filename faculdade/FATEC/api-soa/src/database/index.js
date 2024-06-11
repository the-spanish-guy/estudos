const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Cliente = require('../models/Cliente');
const Dev = require('../models/Dev');
const Projeto = require('../models/Projeto');
const Entregue = require('../models/Entregue');

const connection = new Sequelize(dbConfig);

Cliente.init(connection);
Dev.init(connection);
Projeto.init(connection);
Entregue.init(connection);

Cliente.associate({Projeto});
Projeto.associate({Cliente, Dev});
Dev.associate({Projeto});
Entregue.associate({Projeto});

module.exports = connection;
