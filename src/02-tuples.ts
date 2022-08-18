const prices: (number | string)[] = [1, 2, 3, 4, 5, 6];
prices.push(1);
prices.push('hola');

let user: [string, number, boolean];

// user = ['ferranpetit', 25];

// user = [];
// user = ['ferran'];
// user = ['ferran', 12];
user = ['ferran', 12, true];
const [username, age] = user;

console.log(username);
console.log(age);
