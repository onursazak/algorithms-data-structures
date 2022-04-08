/*
    Time complexity
    Best case : If element is already sorted, O(n)
    Worst case: O(n^2)
 */

const arr = [40, 10, 20, 100, 5, 999, 1];

function bubbleSort(list) {
  let i, j, temp;
  for (i = 0; i < list.length - 1; i++) {
    for (j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
}

console.log(bubbleSort(arr));
