package projeto.dao;

import projeto.bean.Curso;

import javax.swing.*;

public class DaoCurso {
    public Curso busca (Curso curso) {
        Curso course;

        switch (curso.getIdCurso()) {
            case 1:
                course = new Curso(1,"Curso 1","6","2020");
                curso = course;
                break;
            case 2:
                course = new Curso(2,"Curso 2","6","2020");
                curso = course;
                break;
            default:
                return new Curso();
        }
        return curso;
    }
}
