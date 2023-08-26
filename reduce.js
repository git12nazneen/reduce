// accumulatorFunction, initial value
// accumulatorFunction has two perAmeter

const numbers = [1, 2, 5, 3, 6];
const total = numbers.reduce( (previous, current) => previous + current, 0);
const totals = numbers.reduce( (previous, current) => previous + current, 4);
console.log(total);
console.log(totals);