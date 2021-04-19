package main

import (
	"fmt"
	"math"
)

func main() {
	var num1 int = 14
	var num2 int = 8

	answer1 := num1 + num2
	answer2 := num1 - num2
	answer3 := num1 * num2
	answer4 := num1 / num2
	answer5 := num1 % num2

	fmt.Printf("%v\n", answer1) // 22
	fmt.Printf("%v\n", answer2) // 6
	fmt.Printf("%v\n", answer3) // 112
	fmt.Printf("%v\n", answer4) // 1
	fmt.Printf("%v\n", answer5) // 6 remainder

	// float
	var num3 float64 = 3.45
	var num4 float64 = 4.77
	answer6 := num3 * num4

	fmt.Println(answer6) // 16.4565

	sqrt5 := math.Sqrt(5)
	fmt.Println(sqrt5)
}
