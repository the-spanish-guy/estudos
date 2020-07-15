const Livro = require('../models/Livro');
const Sequelize = require('sequelize');

module.exports = {
  async index( req, res ) {
    // console.log(req);
    // const { nome_livro } = req.query;
    const { id_livro: id_LIVRO } = req.params;

    const livro = await Livro.findAll( {
      attributes: ['id_LIVRO', 'NOME_LIVRO', 'ANO_LANCAMENTO_LIVRO', 'ISBN', 'IMAGE_LIVRO', 'IMAGE_LIVRO_URL', 'EDICAO_LIVRO'],
      include: [
        {
          association: 'estoques',
          attributes: ['id_ESTOQUE', 'UND_ITEM'],
        },
        {
          association: 'autores',
          attributes: ['NOME_AUTOR'],
        },
        {
          association: 'editora',
          attributes: ['NOME_EDITORA']
        },
        {
          association: 'categorias',
          attributes: ['NOME_CATEGORIA']
        }
      ],
    });

    // const livro = await Livro.findAll({})
    
    return res.json(livro)
  },

  async autorLivro(req, res) {
    console.log(req);
    const { id_autor } = req.params;

    const livro = await Livro.findAll({where: { AUTOR_ID_LIVRO: id_autor },
      include: [
        {
          association: 'estoques',
          attributes: ['UND_ITEM'],
        },
        {
          association: 'editora',
          attributes: ['NOME_EDITORA']
        },
        {
          association: 'categorias',
          attributes: ['NOME_CATEGORIA']
        }
      ],
    })

    return res.json(livro)
  },

  async store(req, res) {
    console.log('req; ',req)
    console.log(req.file)
    const { filename } = req.file;
    const {
      nome_livro: NOME_LIVRO,
      ano_lancamento_livro: ANO_LANCAMENTO_LIVRO,
      ISBN: ISBN,
      edicao_livro: EDICAO_LIVRO,
      status_livro: STATUS_LIVRO,
      autor_id_livro: AUTOR_ID_LIVRO,
      editora_id_livro: EDITROA_ID_LIVRO,
      categoria_id_livro: CATEGORIA_ID_LIVRO,
     } = req.body;

    const livro = await Livro.create({
      NOME_LIVRO,
      ANO_LANCAMENTO_LIVRO,
      ISBN,
      IMAGE_LIVRO: filename,
      EDICAO_LIVRO,
      STATUS_LIVRO,
      AUTOR_ID_LIVRO,
      EDITROA_ID_LIVRO,
      CATEGORIA_ID_LIVRO,
    }).catch((e) => console.log(e));

    // const livro = Sequelize.quer

    res.json(livro);
  }
}