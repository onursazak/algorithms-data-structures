/*
    Pros
        Bridges the gap between elegance and complexity.
        Reduces the need for complex loops and auxiliary data structures.
        Works well with recursive structures like trees and graphs.

    Cons
        Slowness due to CPU overhead
        Can lead to out of memory errors / stack overflow exceptions.
        Can be unnecessarily complex if poorly constructed.

*/

function reverseString(input) {
  // 1) What is the base case ?
  if (input === "") return "";

  // 2) What is the smallest amount of work i can do in each iteration ?
  return reverseString(input.substring(1)) + input.charAt(0);
}

console.log(reverseString("hello"));

// the word kayak is palidrome. reversed word is the same with the original one.
function isPalindrome(input) {
  // define the best case / stopping condition
  if (input.length === 0 || input.length === 1) {
    return true;
  }

  // Do some work to shrink the problem space
  if (input.charAt(0) === input.charAt(input.length - 1)) {
    return isPalindrome(input.substring(1, input.length - 1));
  }

  // Additional best case to handle non-palindromes
  return false;
}

console.log(isPalindrome("kayak"));

function recursiveSummation(inputNumber) {
  if (inputNumber <= 1) {
    return inputNumber;
  }
  return inputNumber + recursiveSummation(inputNumber - 1);
}

console.log(recursiveSummation(4));
