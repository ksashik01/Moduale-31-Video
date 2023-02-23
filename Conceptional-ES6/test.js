
// const isStudent = true;
// let x = 7;
// let paragraph ;

// // if(isStudent === true){
// //     paragraph = 'he is a student';
// // }else{
// //     paragraph = 'porasuna vallagena';
// // }

// //  (x === 5) ? console.log('he is student') : console.log('no student')
 
// paragraph = (isStudent === true) ? "he is student" : " porasuna vallagena"

// console.log(paragraph)



// const isReuslt =false;

// if (isReuslt===true){
//     console.log ('he is a good student')
// }
// else {
//     console.log ('he is not a student')
// }

// // ternary simple function করার নিয়ম 

// (isReuslt===true)? console.log ('this is ternary type'): console.log ('not type')


// // varriable diclare করার মাধ্যমে ternary simple function করার নিয়ম 

// student= (isReuslt===true)?('good'):('bade')
// console.log (student)

// // == শুধু মাত্র valu কে চেক করে তার মানকে না 
// // === value সাথে সাথে তার মান কে ও চেক করে


// // --------------------------------------------

// // // Array ভিতরে নম্বর গুলো আলাদা ভাবে পেতে spread Array operator ব্যবহার করতে হবে 
// // const phone =[2,3,4,5,6];
// // console.log (...phone)

// // // Array ভিতরে সব থেকে ছোট নম্বর  বাহির করার জন্য Math.min এর সাথে  spread Array operator ব্যবহার করতে হবে 

// // const phone2 =[2,3,4,5,6];
// // console.log (Math.min (...phone2));

// // // একটা Array ভিতরে চাইলে অন্য আর একটি array ভিতরে রাখা যায় 

// // const phone3= [8,9,...phone, 99]
// // console.log (phone3);

// // // একটা Array ভিতরে  আর একটি array ভিতরে রাখার পর যদি নূতন কোন element যুক্ত করতে চাও তাহলে Spread Operator ব্যবহার করতে হবে 

// // const symphony= ['nova', 'iphone', 'walton']
// // const nokia=[...symphony];
// // symphony.push ('Voda Phone');
// // nokia.push ('Xiomei')

// // console.log (symphony);
// // console.log (nokia);

// // // এরে ভিতরে কোন নিদিষ্ট Element কে সেট করতে চাইলে তার indesk কে varriable মাদ্দমে ধরতে হবে। 

// // const light= [10,20,30,40, 50, 10];

// // const num = light [0];
// // const num2 = light [1];
// // const num3 = light [2];
// // console.log (num,num2)

// // // Spread oparetor এরে ভিতরে কোন নিদিষ্ট Element কে সেট করতে চাইলে তার indesk কে varriable মাদ্দমে ধরতে হবে। 
// // const numbers= [10,20,30,40, 50, 10];
// // const[number1,number2,...spreadValue ] = numbers;
// // console.log (number1,number2);
// // console.log (spreadValue);


// // // object array destructuring-------------------

// // const person ={
// //     name:'ashik',
// //     address: 'dhanmondhi',
// //     mobile :01733347570,
// //     age:40,
// //     p:[1,2,3,4]

// // }
// // // object array ভিতরে destructuring মাধ্যমে element গুলো বাহির করা যায় 
// // const {address,name,mobile,p} = person;
// // console.log (address,mobile,p);

// // // properti নাম পরিবর্তন করা যায় ---
// // // * name পরিবর্তন করে nam রাখা হয়েছে 


// const person2 ={
//     name:'ashik',
//     address: 'dhanmondhi',
//     mobile :01733347570,
//     age:40,
//     p:[1,2,3,4]

// }
// // const {address:barikoi,name:nam}= person2
// // console.log (barikoi,nam);

// // spread oparetor মাধ্যমে propertiy value গুলো add করা যায় 

// const person3 = {
//     names:'ashik',
//     addresss: 'dhanmondhi',
//     mobiles :01733347570,
//     ages:40,
//     pa:[1,2,3,4]

// }

// // const {addresss,pa,...propertiy}= person3;
// // console.log (addresss,pa,propertiy)
// // একটা অবজেক্ট কে copy করে আরো একটা obejct এর ভিতরে রাখা যায় ----------

// // *সেক্ষেত্রে spread objecct অপারেটর ব্যবহার করতে হবে 
// //* object জন্য {} ব্যবহার করতে হবে 
// //* spread objecct এর মাধ্যমে নতুন একটা element এর জন্য নূতন একটা মেমোরি বানানো হয়  

// // const person4 ={... person3};
// // person4.ismale= true;
// // console.log (person3)
// // console.log (person4)


// const person6 = {
//     names:'ashik',
//     addresss: 'dhanmondhi',
//     mobiles :01733347570,
//     ages:40,
//     pa:[1,2,3,4]

// }

// // object এর ভিতরে যে সকল propertity রয়েছে তাদের ভিতরে নিদিষ্ট কোন properity element ধরা যায়। 
// const {pa} = person6;
// const [number] = mobiles;
// console.log (pa)



// ----------------------Object Acess --------
const Person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '09432723',
        email: "abul@gmail.com"
    },
    education: {
        schoolName: "andorkilla high school",
        subjects: [
            { name: 'bangla', mark: 45 },
            { name: 'english', mark: 64 },
            { name: 'math', mark: 74 }
        ]
    }
}



// অবজেক্ট এর propertiy গুলো access পাওয়ার উপায় 
// const anyValue= Person.age;
// console.log (anyValue)

// // আরও একটি অবজেক্ট এর propertiy গুলো access পাওয়ার উপায় 
// const anyValues= Person ['contact'];
// console.log (anyValues)

// // আরও একটি অবজেক্ট এর propertiy গুলো access পাওয়ার উপায় 
// const propertity = 'age';
// const anyPropertiy= Person [propertity]
// console.log (anyPropertiy);

// // Object এর ভিতরের Object Access করার পদ্ধতি
// console.log (Person.education);
// console.log (Person.education.subjects);
// console.log (Person.education.subjects[1]);
// console.log (Person.education.subjects[1].mark);


// -------Optional-Chaining----------

const petOwner = {
    name: "Jolonto Kholil",
    contact: {
      phone: "09376253",
      email: "xyz@gmail.com",
    },
    pet: {
      name: "Lofie",
      info: {
        color: "black",
        weight: "1.2kg",
      },
    },
  };
// Object এর ভিতরের যদি সঠিক কোন propertity নাম না থাকে তাহলে প্রথম বার undifiend আসবে আবার সেই properity ভিতরে যদি ভ্যালু খুঁজতে চাই তাহেল erorr খেয়ে বসতে হবে  
// console.log (petOwner.dog.togy)

// error থেকে বাঁচে হলে obejct এর পরে অপশনাল Chaining ? ব্যবহার করতে হবে তাহলে error দিবে না
// console.log (petOwner?.dog?.togy) 


// Deafutl parameter----------

// function add(x=0,y=0){
//     console.log(x,y)
//     const total = x+y;
//     return total
// }

// console.log(add(5,10))

// function addValu (a=0,b){
//     const amount= a+b;
//     return amount
// }
// console.log (addValu(10))

// ---------Arrow Funjtion--------


// এটা হল  function Declaration

// function show (){
//     console.log ("hello")
// }

// show()

// // anonymous function বলতে বুজায় যার কোন নাম নাই 

// // function expression হল : একটা varriable থাকবে তার আবার সেই ভাররিয়াবলে একটা মান হবে Function থাকবে 

// const add= function(){
//     console.log ('hello world')
// }

// add ();

// const addValue= function(a,b){

// return a+b
// }
// console.log (addValue(5,6))

// // Arrow Function Diclare------
// const arroFunction = (x,y) => x+y;
// console.log (ad (10,50))

// // Array Function যদি মান কে return করতে চাই----
// const newArrayFuntion = (a,b) =>{
//     const total =a+b;
//     return total
// }
// console.log (newArrayFuntion(10,20))


// const showName= (name) => console.log (name)
// showName ('mehedi')

// // Variable ছাড়া function
// const hello = () => console.log ('hello world')
// hello ()


// ------forEachMap--------------

// একটা array ভিতরে পত্যেক্টা element কে পেতে হলে forEach ব্যবহার করতে হয় ---
// // forEach Function এর ভিতর থেকে কিছু return করে না

// const array = [10,20,30,40,50]
// // array.forEach(number => console.log (number));
// array.forEach((number,indesk,a) =>{
// console.log (number + ' '+indesk +' '+a )

// } )


// // const arrayNew=
// // array.forEach (number => number*2)
// // console.log (arrayNew)


// // map function এর মাধ্যমে প্রত্যেক এলিমেন্ট কে পাওয়া যায় --
// // map function তার প্রত্যেকটি এলিমেন্ট নূতন ভাবে একটা array রিটার্ন করে 


// array.map ((number,indesk,a)=>  {
//     console.log (number+ ' '+ indesk+' '+a)
// })

// // const arraymap=
// // array.map (number => number*2)
// // console.log (arraymap,array )



// ------Find-Filter----------

// find :যখন find ব্যবহার করবেন তখন single একটা ভ্যালু রিটার্ন করবে। 
// filter :যখন filter ব্যবহার করবেন তখন Array return করবে

const numbers= [12,32,25,75,13,54,97,25,50];
const names= ['abul', 'babul', 'mehedi', 'jakariay']

const x= numbers.find((n) => n >=50);
console.log (x)

const y = numbers.filter ((n)=> n>50);
console.log (y)