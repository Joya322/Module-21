// একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।

function areaOfRectangle(length, height) {
    let area = length * height;
    return area;
}

let length = 20;
let height = 15;
let area = areaOfRectangle(length, height);
console.log(area);