/*
  Time complexity: 
    Worst: n*log(n)
    Average: n*log(n)
    Best: n*log(n)
  
    Space complexity: n

*/

/*
Merge sort is sorting algorithm that uses "divide and conquer" concept. Values of the array must be divided to halves until there is only one element of each array. Then, compares the values and merge them. If 2 branch is sorted, compare them and merge.

To implement merge sort, 2 functions are needed which are merge and sort.


*/

const arr = [14, 7, 3, 12, 9, 11, 6, 2];

// recursive
function recursiveMergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = recursiveMergeSort(arr.slice(0, mid));
  let right = recursiveMergeSort(arr.slice(mid, arr.length));
  const sortedLeft = recursiveMergeSort(left);
  const sortedRight = recursiveMergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(arr1, arr2) {
  let indexOfArr1 = 0;
  let indexOfArr2 = 0;
  let result = [];

  while (indexOfArr1 < arr1.length && indexOfArr2 < arr2.length) {
    if (arr1[indexOfArr1] > arr2[indexOfArr2]) {
      result.push(arr2[indexOfArr2]);
      indexOfArr2++;
    } else {
      result.push(arr1[indexOfArr1]);
      indexOfArr1++;
    }
  }
  while (indexOfArr1 < arr1.length) {
    result.push(arr1[indexOfArr1]);
    indexOfArr1++;
  }
  while (indexOfArr2 < arr2.length) {
    result.push(arr2[indexOfArr2]);
    indexOfArr2++;
  }

  return result;
}

console.log(recursiveMergeSort(arr));
