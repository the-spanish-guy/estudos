const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Autor = require('../models/Autor');
const Editora = require('../models/Editora');
const Categoria = require('../models/Categoria');
const Livro = require('../models/Livro');
const Estoque = require('../models/Estoque');
const Aluno = require('../models/Alunos');
const Emprestado = require('../models/Emprestado');

const connection = new Sequelize(dbConfig);

Autor.init(connection);
Livro.init(connection);
Editora.init(connection);
Categoria.init(connection);
Estoque.init(connection);
Aluno.init(connection);
Emprestado.init(connection);

Livro.associate({Autor, Editora, Categoria, Estoque});
Estoque.associate({Livro, Emprestado});
Emprestado.associate({Aluno, Estoque});
Aluno.associate({Emprestado});
Autor.associate({Livro})

module.exports = connection;