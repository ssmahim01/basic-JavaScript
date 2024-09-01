// Uses of Push and Pop + Unshift

const ages = [];
const numbers = [12, 87, 98, 115];

console.log(numbers);
numbers.push(120, 125, 130, 135, 140, 145, 150);
console.log(numbers);

const friends = ['Mahim', 'Fahim', 'Saim']
friends.push('Dalim');
console.log(friends);

const out1 = friends.pop();
console.log(friends);
const out2 = friends.pop();
console.log(friends);
const out3 = friends.unshift('Nahim');
console.log(friends);
console.log(out1, out2, out3);