package main

import "testing"

func TestOla(t *testing.T) {
	verificaMensagemCorreta := func(t *testing.T, resultado, esperado string) {
		t.Helper()
		if resultado != esperado {
			t.Errorf("resultado '%s', esperado '%s'", resultado, esperado)
		}
	}

	t.Run("Diz olá para as pessoas", func(t *testing.T) {
		resultado := Ola("spanish")
		esperado := "Olá, spanish"

		verificaMensagemCorreta(t, resultado, esperado)
	})

	t.Run("Diz 'Olá, mundo' quando uma string vazia for passada", func(t *testing.T) {
		resultado := Ola("")
		esperado := "Olá, mundo"

		verificaMensagemCorreta(t, resultado, esperado)
	})
}
