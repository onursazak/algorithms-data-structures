function binarySearch(array, left, right, x) {
  if (left > right) {
    return -1;
  }

  const mid = parseInt((left + right) / 2);

  if (x === array[mid]) {
    return mid;
  }

  if (x < array[mid]) {
    return binarySearch(array, left, mid - 1, x);
  }
  return binarySearch(array, mid + 1, right, x);
}

const numbers = [-1, 0, 1, 2, 3, 4, 7, 9, 10, 20];

console.log(binarySearch(numbers, 0, numbers.length - 1, 10));
