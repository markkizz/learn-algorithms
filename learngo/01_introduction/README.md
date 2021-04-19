# Introduction

Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.

## Installation

[Link](https://golang.org/doc/install)

## Verify Installation

```$ go version```

## First go program

```shell
mkdir hello
cd hello
```

create ```main.go```

```go
package main

import "fmt"

func main() {
   fmt.Println("Hello, World!")
}
```

run with this command

```shell
$ go run main.go
Hello, World!
```
