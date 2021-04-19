package main

import (
	"fmt"
)

func main() {
	var number = 3
	var name string = "Teerapat Prommarak"
	name = "Xeus" // re-assigned

	// constant, cannot re-assign
	const bodyTemp = 36.5
	// bodyTemp = 37.7 error

	var isOld = false

	var age uint16 = 34

	fmt.Println(number)
	fmt.Println(name)
	fmt.Println(isOld)
	fmt.Println(age)
}
