
// 32-2 Access Value, nested object Optional chaining
// // 
// how to find obejct into array------------
// * at first object name + element of indesk then obejct name 

const user =[{id:1, name:'abul', job :'docot'}]
// console.log (user [0].name);

// how to find array into array and into obejct--------

const data ={

count:5000,
data :[

{id:1, name:'babul', job:'leader'},
{id:1, name:'Ashik', job:'leader'}

]

}
// console.log (data)
// console.log (data.data)
// console.log (data.data[0].name)
// console.log (data.data[0].name)

// nested object Optional chaining object find---if you want to fine sepecifice array obejct-------
const user2 = {
id : 5000, 
name :'Thomas alba edison',
address: {
        street: {
                first :'35/A Kochukhet Lane',
                second :'third floor',
                third   :'left-side'
},
        postoffice: 'cantoment',
        city :'dhaka',
}

}
const userInformation = user2
// console.log (userInformation.address.street.first)

// const numbers= [2,5,6,7,10];
// const output= []
// for (const number of numbers){
// const double = number*2;
// output.push(double);

// }

// console.log (output)


// function getDoubles(numbers){

//     const output= []
//     for (const number of numberslenght){
//     const double = number*2;
//     output.push(double);
//     }
// return output

// }
// const result = getDoubles(numberslenght)
// console.log (result)

// how to use map-----------
const numbers = [45,40,20,30]
const doubleIt= num => num * 2;
const makeDouble = numbers.map (doubleIt)
doubleIt (numbers);
console.log (makeDouble)
// console.log (makeDouble)---------
const numbersArray = [5,6,7,30];
const makeDouble2 = numbersArray.map (num => num *2) ;
console.log (makeDouble2);

// map simple power-------
const fiveTimes =[1,2,3].map (x=> x*5);
console.log (fiveTimes)