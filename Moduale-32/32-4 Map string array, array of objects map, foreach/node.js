// how to divided by map---------

const numbers  = [12,56,87,44];
const haif =numbers.map (n=> n/2 );
const third =numbers.map (x=> x/3)
console.log (haif)
console.log (third)

// string first letter need---
const friends =['tom hanks', 'tom hansi', 'tom bardy'];
const firsteLetter = friends.map (f => f [0] )
console.log ( firsteLetter)

const friendLength = friends.map (friend => friend.length )
console.log (friendLength)


const products = [

{id:1, name:'mobile', price :80000},
{id:1, name:'watch', price :30000},
{id:1, name:'bag', price :50000}


]

// // const items = products.map (product => console.log (product.name));

// const items = products.map (product => product.name);
// console.log (items)

