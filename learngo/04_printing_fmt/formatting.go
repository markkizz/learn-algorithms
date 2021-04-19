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

	// print formatting
	fmt.Printf("Type: %T Value: %v\n", isOld, isOld)
	fmt.Printf("Type: %T Value: %v\n", age, age)
	fmt.Printf("Type: %T Value: %v\n", bodyTemp, bodyTemp)
	fmt.Printf("Type: %T Value: %v\n", name, name)
	fmt.Printf("Type: %T Value: %v\n", number, number)

	// more formatting
	fmt.Printf("Type: %t\n", true)                         // boolean format
	fmt.Printf("Number: %e\n", 2.3567879678)               // 2.35 e+00
	fmt.Printf("Number 2 precision: %.2f\n", 2.3567879678) // 2.36 round
	fmt.Printf("Number fill with 0: %06d\n", 34)           // 000034

	// store formatting in variable use Sprintf
	var output string = fmt.Sprintf("Number fill with 0: %06d\n", 34)
	fmt.Println(output) // 000034
}
