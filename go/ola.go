package main

import "fmt"

const constOla = "Olá, " // <- Isso é uma declaração de uma constante

func Ola(name string) string {
	if name == "" {
		name = "mundo"
	}
	return constOla + name
}

func main() {
	fmt.Println(Ola("spanish"))
	fmt.Println(Ola(""))
}
