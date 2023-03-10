
// ব্লক scope বাহিরে const এর কাজ হবে না ----
// কিন্তু var block scope এর বাহিরে hosting এর মত কাজ করবে 

function add (a,b){
const total =a+b;
// console.log (total)

if (b>5){
    const sum = 25+a+b
}

else {

const sum =5+a+b;
var current =sum;

}    
console.log (current)
// console.log (sum);

}

add (95,3)