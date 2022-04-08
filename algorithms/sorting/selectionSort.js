// Time Complexity : O(n^2)

const arr = [10, 1, 90, 0, 120, 3, 2, 999];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(selectionSort(arr));
