const Autor = require('../models/Autor');

module.exports = {
  async index( req, res ) {
    // console.log(req);
    const { nome_autor } = req.query;

    // const autor = await Autor.findOne({where: {NOME_AUTOR: nome_autor}, attributes: ['NOME_AUTOR']})
    const autor = await Autor.findAll({attributes: ['id_AUTOR', 'NOME_AUTOR', 'createdAt']});

    return res.json(autor)
  },

  async store(req, res) {
    const { nome_autor } = req.body;
    
    const findAutor = await Autor.findAll({where:{NOME_AUTOR: nome_autor},attributes: ['NOME_AUTOR']});

    if(findAutor.length !== 0) {
      return res.status(409).json({msg: 'Autor já existe!'})
    }
    const autor = await Autor.create({NOME_AUTOR: nome_autor});

    res.json(autor);
  }
}