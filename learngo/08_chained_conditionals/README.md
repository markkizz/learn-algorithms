# Chained Conditions (AND OR NOT)

with logical operators

```go
&&
||
!
```

example

```go
package main

import (
	"fmt"
)

func main() {
	val1 := true || false
	val2 := true && false
	val3 := !true

	val4 := true || false && true

	fmt.Printf("%t\n", val1) // true
	fmt.Printf("%t\n", val2) // false
	fmt.Printf("%t\n", val3) // false
	fmt.Printf("%t\n", val4) // false

}
```
