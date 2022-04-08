// https://www.linkedin.com/pulse/big-o-notation-simple-explanation-examples-pamela-lovett/

// BIG O NOTATION

/*
    Big o notation is the language we use for talking about how long an algorithm takes to run (Time Complexity) or how much memory is used by an algorithm. (space complexity.)

    Big-O notation is a way to track how quickly the runtime grows relative to the size of the input.

    In Big-O notation, we only care about the dominating term of the function
*/

// O(1) → Constant Time

/*
    O(1) means that it takes a constant time to run an algorithm, regardless of the size of the input.
*/

const smalCollection = [1, 2, 3, 4, 5];
// const giganticCollection = [1,2,3,4,5,6,7,8,9,10,11,13,4,15,16,17,.....,1000000]

// Passing smallCollection or giganticCollection will produce the same runtime of O(1) when accessing the 0 index. The return of firstIndex is also a constant time operation. Regardless of the size of n, both of these operations will take a constant amount of time.

// findFirstIndex(smalCollection)
// findFirstIndex(giganticCollection)

function findFirstIndex(n) {
  const firstIndex = n[0];
  return firstIndex;
}

// O(n) → Linear Time

/*
    O(n) means that the run time increases at the same pace as the input.

    In programming, one of the most common linear-time operations is traversing an array. 
    In JavaScript, methods like forEach, map, and reduce run through the entire collection of data, from start to finish.
*/

// Take a look at our printAllValues function below.
// The number of operations that it will take to loop through n is directly related to the size of n.

function printAllValues(n) {
  for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
  }
}

// O(n²) → Quadratic Time
/*
    O(n²) means that the calculation runs in quadratic time, which is the squared size of the input data.
    In programming, many of the more basic sorting algorithms have a worst-case run time of O(n²):

*/

// If n is our smallCollection, we will end up with a count of 16 operations. Not horrible.
// But what about if n is our gigantic collection? A billion times a billion is a quintillion — or 1,000,000,000,000,000,000
function countOperations(n) {
  let operations = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      operations++;
    }
  }
  return operations;
}

// O(log n) → Logarithmic Time

/*
    O(log n) means that the running time grows in proportion to the logarithm of the input size, 
    meaning that the run time barely increases as you exponentially increase the input.
*/

const smallNumber = 1000;
const biggerNumber = 10000;

countOperations(1000);
countOperations(10000);
// In our example above, we end up with 11 operations if n = 2000. If n = 4,000, we end up with 12 operations. Every time that we double the amount of n, the amount of operations only increases by 1

function countOperations(n) {
  let operations = 0;
  let i = 1;

  while (i < n) {
    i = i * 2;
    operations++;
  }
  return operations;
}

// Calculating Big O

const numbers = [1, 2, 3, 4, 5];

function logEverythingTwice(items) {
  // O(n)
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]); // O(1)
  }

  // O(n)
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]); // O(1)
  }

  // O(n) + O(n) = O(2n). Since the number 2 is constant, throw it out and call this O(n)
}

function logEverythingFiveTimes(items) {
  // O(n)
  for (let i = 0; i < items.length; i++) {
    // O(n)
    for (let j = 0; j < items.length; j++) {
      // O(1)
      console.log(items[i]);
    }
  }
  // O(n) * O(n) = O(n2)
}

// Drop the Non-Dominant Terms

function printMultiplesThenSum() {
  // O(n)
  for (let i = 0; i < items.length; i++) {
    // O(n)
    for (let j = 0; j < items.length; j++) {
      //O(1)
      console.log(items[i]);
    }
  }

  // O(n)
  const sum = items.reduce((acc, item) => {
    // O(1)
    return (acc += item);
  }, 0);

  // O(1)
  return sum;

  // O(n2 + n) = Since Big-O is also not concerned with non-dominant terms, we drop the n
  // quadratic wins since it is worse than linear time
}
