package main

import (
	"fmt"
	"math"
	"math/rand"
	"time"
)

func add(x, y int) int {
	return x + y
}

func swap(x, y string) (string, string) {
	return y, x
}

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

var c, python, java bool

func main() {
	fmt.Println("Hello, Teerapat")

	fmt.Println("The time is ", time.Now())

	fmt.Println("My fav num is", rand.Intn(10))

	fmt.Println("The sqrt of 9 is", math.Sqrt(9))

	fmt.Println("Pi is", math.Pi)

	fmt.Println(add(4, 5))

	a, b := swap("Hello", "World")
	fmt.Println(a, b)

	fmt.Println(split(17))

	fmt.Println()

	var i int
	fmt.Println(i, c, python, java)
}
