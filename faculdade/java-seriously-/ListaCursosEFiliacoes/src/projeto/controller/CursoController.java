package projeto.controller;

import projeto.bean.Curso;
import projeto.dao.DaoCurso;

public class CursoController {
    public Curso BuscaCurso(Curso curso) {
        DaoCurso daoCurso = new DaoCurso();
        return daoCurso.busca(curso);
    }
}
