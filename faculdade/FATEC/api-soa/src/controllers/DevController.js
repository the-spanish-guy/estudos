const Dev = require('../models/Dev');
const Projeto = require('../models/Projeto');
const { associate } = require('../models/Cliente');

module.exports = {
  async index( req, res ) {
    // const { id_aluno: id_ALUNO } = req.params;

    const dev = await Dev.findAll({
      attributes: [ "id_DEV", "NOME_DEV", "updatedAt", "createdAt" ]
    });

    return res.json(dev)
  },

  async store(req, res) {
    console.log(req.body)
    const { nome_dev: NOME_DEV } = req.body;
    
    const dev = await Dev.create({
      NOME_DEV
    });

    res.json(dev);
  },

  async associate(req, res) {

    const { id_projeto } = req.params;
    const { devs } = req.body;

    if(!id_projeto) {
      return res.status(404).json({ msg: 'Projeto não encontrado!' })
    }

    
    // console.log(projeto);
    
    devs.map( async (dev_id) => {
      console.log('dev: ', dev_id)
      const dev = await Dev.findByPk(dev_id, { attributes: ['id_DEV'] })
      const projeto = await Projeto.findByPk(id_projeto, { attributes: ['id_PROJETO'] })

      const [ Projetos ] = await Projeto.findOrCreate({
        where: { id_PROJETO: id_projeto },
        attributes: ['id_PROJETO']
      })

      const [ Devs ] = await Dev.findOrCreate({
        where: { id_DEV: dev_id },
        attributes: ['id_DEV']
      })

      // console.log('aqui: ', Devs
      // await projeto.addDev(Devs)
      await dev.addProjeto(Projetos)

    })
    
  }
}