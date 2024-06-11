const Alunos = require('../models/Alunos');

module.exports = {
  async index( req, res ) {
    const { id_aluno: id_ALUNO } = req.params;

    const aluno = await Alunos.findAll(
      // {
      // where: {id_ALUNO}
    // }
    );

    console.log(aluno);

    if (!aluno.length) {
      return res.status(400).json({msg: "Aluno não encontrado"});
    }

    return res.json(aluno)
  },

  async store(req, res) {
    console.log(req.body)
    const { nome_aluno: NOME_ALUNO, status_aluno: STATUS_ALUNO } = req.body;

    const findAluno = await Alunos.findOne({where:{NOME_ALUNO}, attributes:['NOME_ALUNO']})

    if(findAluno) {
      return res.status(409).json({msg: 'Aluno já existe!'})
    }

    const aluno = await Alunos.create({
      NOME_ALUNO,
      STATUS_ALUNO
    });

    res.json(aluno);
  }
}