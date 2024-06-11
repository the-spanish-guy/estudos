package main

import "fmt"

const constOla = "Olá, " // <- Isso é uma declaração de uma constante

func Ola(name string) string {
	return constOla + name
}

func main() {
	fmt.Println(Ola("mundo"))
}
