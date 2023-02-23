// এটা হল  function Declaration

function show (){
    console.log ("hello")
}

show()

// anonymous function বলতে বুজায় যার কোন নাম নাই 

// function expression হল : একটা varriable থাকবে তার আবার সেই ভাররিয়াবলে একটা মান হবে Function থাকবে 

const add= function(){
    console.log ('hello world')
}

add ();

const addValue= function(a,b){

return a+b
}
console.log (addValue(5,6))

// Arrow Function Diclare------
const arroFunction = (x,y) => x+y;
console.log (ad (10,50))

// Array Function যদি মান কে return করতে চাই----
const newArrayFuntion = (a,b) =>{
    const total =a+b;
    return total
}
console.log (newArrayFuntion(10,20))


const showName= (name) => console.log (name)
showName ('mehedi')

// Variable ছাড়া function
const hello = () => console.log ('hello world')
hello ()




