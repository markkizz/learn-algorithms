# Variables and Data types

## Numbers

### Integers

There are 2 types of integers, unsigned and signed integers

#### Unsigned Integers (no negatives)

- uint8 / byte (0 - 255)
- uint16 (0 - 65535)
- uint32 (0 - 4294967295)
- uint64 (0 - 18446744073709551615)

#### Signed Integers

- int8 (-128 to 127)
- int16 (-32768 to 32767)
- int32 / rune (-2147483648 to 2147483647)
- int64 (-9223372036854775808 to 9223372036854775807)

### Floats

- float32
- float64

## String

```go
"Hello, World"
```

## Boolean

- true
- false

## Examples

```golang
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
```
