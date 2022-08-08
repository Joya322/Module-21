function maxInArray(numbers) {
  var min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}
const numbers = [20, 100, 200, 250, 300, 500, 1, 5];
const maximumNumber = maxInArray(numbers);
console.log(maximumNumber);
