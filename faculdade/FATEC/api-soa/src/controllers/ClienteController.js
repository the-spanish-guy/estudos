const Cliente = require('../models/Cliente');
const Projeto = require('../models/Projeto');
const Entregue = require('../models/Entregue');

module.exports = {
  async index( req, res ) {
    // const { id_aluno: id_ALUNO } = req.params;

    const cliente = await Cliente.findAll({
      attributes: [ "id_CLIENTE", "NOME_CLIENTE", "updatedAt", "createdAt" ]
    });

    return res.json(cliente)
  },

  async store(req, res) {
    console.log(req.body)
    const { nome_cliente: NOME_CLIENTE } = req.body;
    
    const aluno = await Cliente.create({
      NOME_CLIENTE
    });

    res.json(aluno);
  },

  async aprovar(req, res) {
    const { id_projeto } = req.params;
    const { new_status } = req.headers;

    const projeto = await Projeto.update(
      {
        status: new_status
      },
      {
        returning: true,
        where: { id_PROJETO: id_projeto }
      }
    ).then(async () => {
      await Entregue.create({PROJETOS_ID_ENTREGUE: id_projeto})
    })


    return res.json(projeto)
  }
}