/*
    Time complexity:
        Worst case:  O(n^2)
        Best case :O(n*logn) // if already sorted.
        average case : O(n logn)
*/

/*
    Like merge sort quick sort is a Divide and Conquer algorithm.
    It picks and element as pivot and partitions the given array around the picked pivot.

    The key process in quick sort is partition. Target of partitions is, 
    given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements after x.
    All this should be done in linear time. 

*/

/*

    two indexes : j and i 

    j: keep track of current number we examining from beginning of the array to up  to right before pivot.
    i: we always point to last number that less than pivot.

    two conditions we always need to satisfy:

    1) all the numbers from the beginning up to i less than pivot
    2) all the numbers between i (not including i) and j are greater or equal than pivot.

*/

const array = [10, 4, 3, 7, 8, 1, -5, -3];

function quickSort(arr) {
  qs(arr, 0, arr.length - 1);
}

//recursive call
function qs(arr, left, right) {
  if (left >= right) return;

  // partitionIndex
  let pi = partition(arr, left, right);

  qs(arr, left, pi - 1);
  qs(arr, pi + 1, right);
}

// returns partition index
function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left - 1;
  let j = left;

  for (j; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  let temp = arr[right];
  arr[right] = arr[i + 1];
  arr[i + 1] = temp;

  return i + 1;
}

quickSort(array);

console.log(array);
