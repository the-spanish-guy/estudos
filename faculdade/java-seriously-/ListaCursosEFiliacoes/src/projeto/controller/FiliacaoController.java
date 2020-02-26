package projeto.controller;

import projeto.bean.Filiacao;
import projeto.dao.DaoFiliacao;

public class FiliacaoController {
    public Filiacao BuscaFiliacaoPorId(Filiacao filiacao) {
        DaoFiliacao daoFiliacao = new DaoFiliacao();
        return daoFiliacao.busca(filiacao);
    }
}
