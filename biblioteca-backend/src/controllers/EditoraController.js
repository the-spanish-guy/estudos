const Editora = require('../models/Editora');

module.exports = {
  async index( req, res ) {
    // console.log(req);
    // const { nome_editora } = req.query;

    const editora = await Editora.findAll({
      // where:{
      //   NOME_EDITORA: nome_editora
      // },
      attributes: ['id_EDITORA', 'NOME_EDITORA', 'createdAt']
    });

    return res.json(editora)
  },

  async store(req, res) {
    const { nome_editora } = req.body;

    const findEditora = await Editora.findOne({where: {NOME_EDITORA: nome_editora}, attributes: ['NOME_EDITORA']});
    
    if (findEditora) {
      return res.status(409).json({msg: 'Editora já existe!'})
    }

    const editora = await Editora.create({NOME_EDITORA: nome_editora});

    return res.json(editora);
  }
}