package main

import "fmt"

func main() {
	var name = "Teerapat"
	fmt.Printf("%T \n", name) // string

	// assignment expression operator := so we can omit var keyword
	age := 34
	fmt.Printf("%T \n", age) // int

	temperature := 25.7
	fmt.Printf("%T \n", temperature) // float64

	// default value
	var number uint64
	var isOld bool

	fmt.Println(number) // 0
	fmt.Println(isOld)  // false
}
