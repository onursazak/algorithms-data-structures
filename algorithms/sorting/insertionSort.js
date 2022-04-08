// For explananation and algorithms
// https://www.geeksforgeeks.org/insertion-sort/

/*
    Animated 
    https://www.youtube.com/watch?v=uMqVuEEWJv4
*/

/*
    Steps

    1- Select the current element
    2- Compare current element with all elements in the left side.
    3- Increment current element

*/

const arr = [5, 7, 4, 6, 1, 3];

function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

insertionSort(arr, 6);
console.log(arr);
