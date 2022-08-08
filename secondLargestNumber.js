//  (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

function secondLargestNumberInArray(numbers) {
  let first = -1;
  let second = -1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > first) {
      second = first;
      first = numbers[i];
    } else if (numbers[i] > second && numbers[i] != first) {
      second = numbers[i];
    }
  }

  return second;
}

const numbers = [20, 100, 200, 250, 300, 500, 1, 5];
const secondLargestNumber = secondLargestNumberInArray(numbers);
console.log(secondLargestNumber);
