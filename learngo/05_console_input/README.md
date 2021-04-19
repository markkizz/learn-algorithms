# Console Input

using package ```fmt, bufio, os, strconv```

```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()

	input := scanner.Text()

	fmt.Printf("You typed: %q", input) // will print your input text
}
```

let's calculate your age by inputing your birth year

```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Printf("Type the your birth year: ")
	scanner.Scan()

	input, _ := strconv.ParseInt(scanner.Text(), 10, 64)

	fmt.Printf("You will be %d year old at the end of 2020", 2020-input)
}
```

Normally, ```strconv.ParseInt``` return 2 values. Then I just ignore another one by assigned it to ```_``` variable.

```shell
Type the your birth year: 1986
You will be 34 year old at the end of 2020
```