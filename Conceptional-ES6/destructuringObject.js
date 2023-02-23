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



