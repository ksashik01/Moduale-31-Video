
// Implement filter use---
const numbers =[12,10,23,25,30,50,5,40,15];
const bigNumbers = numbers.filter (number => number > 20);
const tiny =numbers.filter (number => number<=23 );
const even = numbers.filter (number => number%2===0 )

console.log (...bigNumbers);
console.log (tiny)
console.log (even)


const products = [

{id:1, name:'laptop', price:100000},
{id:1, name:'mobile', price:140000},
{id:1, name:'bag', price:4000},
{id:1, name:'walton', price:45000},
{id:1, name:'her', price:3000},

]

const prizeHigh=products.filter(product => product.price>=100000 );
console.log (prizeHigh);
const prizeLow= products.filter (product => product.price< 5000 )
console.log (prizeLow)