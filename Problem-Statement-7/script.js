function createCounter() {
  let count = 0; 

  return function increment() {
    count = count + 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
