// Time complexity : O(logn)

const arr = [-2, 3, 4, 7, 8, 9, 11, 13];

let operation = 0;
const search = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    operation++;
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(
  "With BinarySearch foundIndex: %d , operationCount: %d",
  search(arr, 13),
  operation
);
