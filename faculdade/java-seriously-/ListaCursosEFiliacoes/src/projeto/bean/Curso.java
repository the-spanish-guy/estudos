package projeto.bean;

import javax.swing.*;
import java.awt.*;

public class Curso {
    int idCurso = 0;
    String nomeCurso = "";
    String ciclo = "";
    String ano = "";

    public Curso() {}
    public Curso(int idCurso, String nome, String ciclo, String ano) {
        this.idCurso = idCurso;
        this.nomeCurso = nome;
        this.ciclo = ciclo;
        this.ano = ano;
    }

    public int getIdCurso() {
        return idCurso;
    }

    public void setIdCurso(int idCurso) {
        this.idCurso = idCurso;
    }

    public String getNomeCurso() {
        return nomeCurso;
    }

    public void setNomeCurso(String nome) {
        this.nomeCurso = nome;
    }

    public String getCiclo() {
        return ciclo;
    }

    public void setCiclo(String ciclo) {
        this.ciclo = ciclo;
    }

    public String getAno() {
        return ano;
    }

    public void setAno(String ano) {
        this.ano = ano;
    }

//    public static void main() {
//        EventQueue.invokeLater(new Runnable() {
//            @Override
//            public void run() {
//                JOptionPane.showMessageDialog(null,"TESTE segundo botão");
//            }
//        });
//    }


    @Override
        public String toString() {
        if (!(nomeCurso.length() > 0) || !(ciclo.length() > 0) || !(ano.length() > 0)) {
            return "Curso não encontrado, fechando a janela";
        }
        
        return "Curso \n" +
                "id: " + idCurso +
                "\nnome: " + nomeCurso +
                "\nciclo: " + ciclo +
                "\nano: " + ano;
    }
}
