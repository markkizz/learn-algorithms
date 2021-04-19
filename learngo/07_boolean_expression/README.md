# Boolean Expression

comparison operator (both values must be the same type)

```go
>
<
<=
>=
==
!=
```

```go
package main

import (
	"fmt"
)

func main() {
	x := 5
	y := 6

	val := x < 5
	val2 := y == 6
	val3 := x != y

	fmt.Printf("%t\n", val)  // false
	fmt.Printf("%t\n", val2) // true
	fmt.Printf("%t\n", val3) // true

	// string comparison (ASCII comparison)
	str1 := "T"
	str2 := "t"
	val4 := str1 < str2

	fmt.Printf("%t\n", val4) // true
}
```
