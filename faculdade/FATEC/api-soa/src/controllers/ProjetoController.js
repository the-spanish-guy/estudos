const Projeto = require('../models/Projeto');
const Dev = require('../models/Dev');

module.exports = {
  async index( req, res ) {
    // const { id_aluno: id_ALUNO } = req.params;

    const projeto = await Projeto.findAll({
      attributes: [ "id_PROJETO", "NOME_PROJETO", "updatedAt", "createdAt" ],
      include: [
        {
          association: 'cliente',
          attributes: ['NOME_CLIENTE']
        },
        {
          association: 'devs',
          attributes: ['NOME_DEV']
        }
      ]
    });

    return res.json(projeto)
  },

  async store(req, res) {
    console.log(req.body)
    const { devs, nome_projeto, status } = req.body;
    const { id_cliente } = req.params;

    if(!nome_projeto) {
      return res.status(406).json({ msg: 'Campos inválidos!' })
    }

    const projeto = await Projeto.create({
      NOME_PROJETO: nome_projeto,
      status,
      CLIENTE_ID_PROJETO: id_cliente
    });    
    
    return res.json(projeto);
  },

  async deletar(req, res) {
    const { id_projeto } = req.params

    const projeto = await Projeto.findOne({where: { id_PROJETO: id_projeto }, attributes: ['id_PROJETO']})

    if(!projeto) {
      return res.status(404).json({msg: 'Projeto não encontrado'})
    }

    await Projeto.destroy({
      where: {
        id_PROJETO: id_projeto
      }
    })

    return res.json({msg: 'Projeto deletado com sucesso!'})
  }
}