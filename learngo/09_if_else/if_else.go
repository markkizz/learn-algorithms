package main

import (
	"fmt"
)

func main() {
	name := "Xeus"

	fmt.Println("Before If")

	if name == "Xeus" {
		fmt.Println("Your name is:", name)
	}

	fmt.Println("After If")

	age := 18

	if age < 34 {
		fmt.Println("Young")
	} else {
		fmt.Println("Old")
	}
	// Young

	yourMoney := 35000

	if yourMoney <= 20000 {
		fmt.Println("You're poor")
	} else if yourMoney > 20000 && yourMoney < 40000 {
		fmt.Println("You're middle class")
	} else {
		fmt.Println("You're rich")
	}
}
