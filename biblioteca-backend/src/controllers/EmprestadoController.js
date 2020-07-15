const Emprestado = require('../models/Emprestado');
const { findByPk } = require('../models/Emprestado');

module.exports = {
  async index(req,res) {
    const { id_aluno: ALUNO_ID_EMPRESTADO } = req.params;

    console.log('AAAAAAAAAAAAAAAAAAAAA: ', ALUNO_ID_EMPRESTADO)

    const emprestado = await Emprestado.findAll({
      where: { ALUNO_ID_EMPRESTADO },
      attributes: ['ENTRADA', 'SAIDA'],
      include: [
        {
          association: 'aluno',
          attributes: ['NOME_ALUNO', 'STATUS_ALUNO'],
        },
        {
          association: 'item',
          attributes: ['UND_ITEM'],
          include: [
            {
              association: 'livros',
              include: [{
                association: 'estoques'
              }]
            }
          ]
        }
      ]
    });

    return res.json(emprestado);
  },

  async store(req,res) {
    const {
      id_aluno,
      id_estoque
    } = req.body;
    // console.log(req.body)
    console.log(id_aluno, id_estoque)

    const findEmprestimo = await Emprestado.findAll({
      where: {
        ESTOQUE_ID_ITEM: parseInt(id_estoque),
        ALUNO_ID_EMPRESTADO: parseInt(id_aluno),
      }
    })

    if (findEmprestimo.length !== 0) {
      console.log('kjasbciasdygi')
      return res.status(409).json({ msg: 'Livro já emprestado'})
    }

    const emprestado = await Emprestado.create({
      ESTOQUE_ID_ITEM: parseInt(id_estoque),
      ALUNO_ID_EMPRESTADO: parseInt(id_aluno),
    });

    res.json(emprestado);
  },

  async devolve(req, res) {
    const {
      id_aluno,
      id_estoque
    } = req.body;
    console.log(id_aluno, id_estoque)

    const devolve = await Emprestado.destroy({
      where: {
        ESTOQUE_ID_ITEM: parseInt(id_estoque),
        ALUNO_ID_EMPRESTADO: parseInt(id_aluno),
      }
    })
    res.json(devolve)
  }
}