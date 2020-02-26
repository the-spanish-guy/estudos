package projeto.bean;

public class Filiacao {
    int idFiliacao = 0;
    String filiacao1 = "";
    String filiacao2 = "";
    String nomeFiliado = "";

    public Filiacao() {}

    public Filiacao(int idFiliacao, String filiacao1, String filiacao2, String nomeFiliado) {
        this.idFiliacao = idFiliacao;
        this.filiacao1 = filiacao1;
        this.filiacao2 = filiacao2;
        this.nomeFiliado = nomeFiliado;
    }

    public int getIdFiliacao() {
        return idFiliacao;
    }

    public void setIdFiliacao(int idFiliacao) {
        this.idFiliacao = idFiliacao;
    }

    public String getFiliacao1() {
        return filiacao1;
    }

    public void setFiliacao1(String filiacao1) {
        this.filiacao1 = filiacao1;
    }

    public String getFiliacao2() {
        return filiacao2;
    }

    public void setFiliacao2(String filiacao2) {
        this.filiacao2 = filiacao2;
    }

    public String getNomeFiliado() {
        return nomeFiliado;
    }

    public void setNomeFiliado(String nomeFiliado) {
        this.nomeFiliado = nomeFiliado;
    }

    @Override
    public String toString() {
        if (!(filiacao1.length() > 0) || !(filiacao2.length() > 0) || !(nomeFiliado.length() > 0)) {
            return "Filiação não encontrada, fechando a janela";
        }
        return "Filiação \n" +
                "id: " + idFiliacao +
                "\nPrimeira Filiação: " + filiacao1 +
                "\nSegunda Filiação: " + filiacao2 +
                "\nFiliado: " + nomeFiliado;
    }
}
