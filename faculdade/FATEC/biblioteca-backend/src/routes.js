const express = require('express');
const multer = require('multer');

const AutorsController = require('./controllers/AutorController');
const EditorasController = require('./controllers/EditoraController');
const CategoriasController = require('./controllers/CategoriaController');
const LivroController = require('./controllers/LivroController');
const EstoqueController = require('./controllers/EstoqueController');
const AlunoController = require('./controllers/AlunoController');
const EmprestadoController = require('./controllers/EmprestadoController');

const uploadConfig = require('./config/multer');
const upload = multer(uploadConfig);

const routes = express.Router();

routes.get('/autor', AutorsController.index);
routes.post('/autor', AutorsController.store);

routes.get('/editora', EditorasController.index);
routes.post('/editora', EditorasController.store);

routes.get('/categoria', CategoriasController.index);
routes.post('/categoria', CategoriasController.store);

routes.get('/livro/', LivroController.index);
routes.get('/livro/:id_autor/livro', LivroController.autorLivro);
routes.post('/livro', upload.single('capa_livro'), LivroController.store);

routes.get('/estoque/:id_livro/livro', EstoqueController.index);
routes.put('/estoque/:id_livro/empresta', EstoqueController.updateEstoqueEmprestado);
routes.put('/estoque/:id_livro/atualiza/:unidades', EstoqueController.updateEstoque);
routes.post('/estoque', EstoqueController.store);

routes.get('/aluno/', AlunoController.index);
routes.post('/aluno', AlunoController.store);

routes.get('/emprestado/:id_aluno/aluno', EmprestadoController.index);
routes.post('/emprestado', EmprestadoController.store);
routes.post('/emprestado/devolvido', EmprestadoController.devolve);

module.exports = routes;