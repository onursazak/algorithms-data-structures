function calcFactorial(number) {
  if (number === 1 || number === 0) return 1;
  let result = 1;

  let num = number;
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
}

/*
    call stack representation if input is 4: 
    4 * (3 * 2 * 1);
    4 * (3 * 2 * calcFacRecursive(1))
    4 * (3 * calcFacRecursive(2))
    4 * calcFacRecursive(3)
*/
function calcFacRecursive(input) {
  if (input === 1 || input === 0) return 1;
  return input * calcFacRecursive(input - 1);
}
