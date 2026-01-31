function processNumbers(arr) {
  return arr.map(num => num % 2 === 0 ? num * num : num);
}

console.log(processNumbers([2,3,4,5,6]));
