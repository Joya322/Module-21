function maxInArray(numbers) {
  var max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
const numbers = [20, 100, 200, 250, 300, 500, 1, 5];
const maximumNumber = maxInArray(numbers);
console.log(maximumNumber);
