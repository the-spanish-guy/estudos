const Categoria = require('../models/Categoria');

module.exports = {
  async index( req, res ) {
    // console.log(req);
    // const { nome_categoria } = req.query;

    const categoria = await Categoria.findAll({
      // where:{
      //   NOME_CATEGORIA: nome_categoria
      // },
      attributes: ['id_CATEGORIA', 'NOME_CATEGORIA', 'createdAt']
    });

    return res.json(categoria)
  },

  async store(req, res) {
    const { nome_categoria } = req.body;

    const findCategoria = await Categoria.findOne({where:{NOME_CATEGORIA: nome_categoria}, attributes:['NOME_CATEGORIA']})

    if(findCategoria) {
      return res.status(409).json({msg: 'Categoria já exisrte!'});
    }

    const categoria = await Categoria.create({NOME_CATEGORIA: nome_categoria});

    res.json(categoria);
  }
}