const Estoque = require('../models/Estoque');
const Livro = require('../models/Livro');

module.exports = {
  async index( req, res ) {
    // console.log(req);
    const { id_livro: LIVRO_ID_ESTOQUE } = req.params;
    console.log(LIVRO_ID_ESTOQUE)

    const [estoque] = await Estoque.findAll({
      order: [['id_ESTOQUE', 'DESC']],
      attributes: ['UND_ITEM'],
      include: [
        {
          association: 'livros',
          attributes: ['NOME_LIVRO']
        }
      ]
    });

    return res.json(estoque)
  },
  
  async updateEstoqueEmprestado(req, res) {
    console.log(req)
    const { id_livro: LIVRO_ID_ESTOQUE } = req.params;
    
    const { UND_ITEM: unidade } = await Estoque.findOne({where: {LIVRO_ID_ESTOQUE}});
    console.log(unidade);

    if(!unidade) {
      return res.status(404).json({msg: 'este livro não tem possui estoque'})
    }

    const atualizaEstoque = await Estoque.update(
      {
        UND_ITEM: unidade -1
      },
      {
        returning: true, 
        where: { LIVRO_ID_ESTOQUE }
      }
    )

    return res.json(atualizaEstoque)
  },
  
  async updateEstoque(req, res) {
    const { id_livro: LIVRO_ID_ESTOQUE, unidades } = req.params;
    console.log(req.params)
    
    const response = await Estoque.findOne({where: {LIVRO_ID_ESTOQUE}});
    const new_unidade = ((!response) ? 0 : response.UND_ITEM) + parseInt(unidades)

    console.log('unidades', new_unidade)

    if(!response) {
      await Estoque.create({LIVRO_ID_ESTOQUE, UND_ITEM: new_unidade})
    }

    const atualizaEstoque = await Estoque.update(
      {
        UND_ITEM: new_unidade
      },
      {
        returning: true, 
        where: { LIVRO_ID_ESTOQUE }
      }
    )

    console.log(atualizaEstoque)

    return res.json(atualizaEstoque)
  },

  async store(req, res) {
    console.log(req.body)
    const { und_item: UND_ITEM, isbn: ISBN } = req.body;

    const { id_LIVRO } = await Livro.findOne({
      where:{ ISBN }
    })

    console.log(id_LIVRO)

    const estoque = await Estoque.create({
      UND_ITEM,
      LIVRO_ID_ESTOQUE: id_LIVRO
    });

    res.json(estoque);
  }
}