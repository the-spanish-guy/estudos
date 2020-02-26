package projeto.dao;

import projeto.bean.Curso;
import projeto.bean.Filiacao;

import javax.swing.*;

public class DaoFiliacao {
    public Filiacao busca (Filiacao filiacao) {
        Filiacao filiacao1;

        switch (filiacao.getIdFiliacao()) {
            case 1:
                filiacao1 = new Filiacao(1,"Nome 1","Segundo 1","Nome da Filiação");
                filiacao = filiacao1;
                break;
            case 2:
                filiacao1 = new Filiacao(2,"Nome 2","Segundo 2","Nome da Filiação");
                filiacao = filiacao1;
                break;
            default:
                return new Filiacao();
        }
        return filiacao;
    }
}
