#include <stdio.h>
#include <stdint.h>
#include <cs50.h>

int main() {
  printf("hello world\n");
  string input = get_string("input: ");
  printf("this is your input %s", input);
  printf("got it");
  return  0;
};