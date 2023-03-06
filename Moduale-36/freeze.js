const bottle ={color:'yello', price:50, isClened:true,capacity:1}

const keys = Object.keys (bottle);
// console.log (keys);
const value = Object.values(bottle)
// console.log (value);

const pair =Object.entries (bottle)
// console.log (pair)

// কোন propertiy মান delete করতে চাইলে----
// seal properity ব্যবহার করলে নতুন কোন properity মান add ও delete করা যায় . 



// Object.seal (bottle)

// *
// delete bottle.isClened;
// bottle.price =1000;
// bottle.height=12;

// console.log (bottle)



Object.freeze (bottle)

*
delete bottle.isClened;
bottle.price =1000;
bottle.height=12;

console.log (bottle)