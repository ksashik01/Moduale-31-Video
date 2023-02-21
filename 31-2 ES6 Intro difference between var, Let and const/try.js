
// Function default parameter for not provided values

let number = 40;
number =50;
number = 60;
console.log (number)

const numbers= 50;
numbers.push=60;
console.log (numbers)



function add(num, num2){

    if ( num2===undefined ){
        num2=50;
    }

    const total = num + num2 ;
    return total;
}
const amountTotal = add(10,);
console.log (amountTotal)


// deafult Name---


function add(num, num2=20){
    const total = num + num2 ;
    return total;
}
const amount =  add(10,);
console.log (amount);


function add (first, last='khan'){
const fullName= first + ' '+ last ;
return fullName;

}
const addNewname= add('ashik',);
console.log (addNewname)



