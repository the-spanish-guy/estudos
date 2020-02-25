package projeto.bean;

import javax.swing.*;
import java.awt.*;

public class Curso {
    int idCurso;
    String nomeCurso;
    String ciclo;
    String ano;

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
        return "Curso \n" +
                "id: " + idCurso +
                "\nnome: " + nomeCurso +
                "\nciclo: " + ciclo +
                "\nano: " + ano;
    }
}
