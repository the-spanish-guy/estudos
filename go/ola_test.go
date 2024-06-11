package main

import "testing"

func TestOla(t *testing.T) {
	resultado := Ola("spanish")
	esperado := "Olá, spanish"

	if resultado != esperado {
		t.Errorf("resultado '%s', esperado '%s'", resultado, esperado)
	}
}
