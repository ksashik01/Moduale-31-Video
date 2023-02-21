// how to find a big number in braket------
const ashik = Math.max(12, 85, 999, 787)


// how to find big number of areay (justtype ...)---

const numbers =[12, 85, 99, 100];
const largestAmount = Math.max(...numbers);
console.log(...numbers);
console.log(largestAmount);


// how to copay arrray to arr and push methiood informattion---------


const numbersArray = [ 40, 40, 90];
numbersArray.push(89)

console.log(numbersArray)

const numbers2 = [...numbersArray];
numbers2.push (105)
console.log (numbers2)


// if i wanto to copy array and also i want set array Numbers--------

const numbers3 = [40, 20]
const numbers4 = [40,...numbers3, 111];
console.log (numbers4)