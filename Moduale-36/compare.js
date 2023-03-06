// const first ={a:2};
// const second = {a:2};
// if (first === second){
//     console.log ('they are some')
// }
// else{

//     console.log ('different')
// }

// একটা অবজেক্ট এর ম্যান এর ভিতরে যদি আরও একটি অবজেক্ট রাখা হয় তখন তার ম্যান সমান হয় 

// const num ={a:2};
// const num2= {a:2};
// const num3 = num

// if (num3 === num){
//     console.log ('they are some')
// }
// else{

//     console.log ('different')
// }


// অবজেক্ট গুলোকে string কনভার্ট করে তাদের ম্যান সমান করা যায় ----
// const first ={a:2};
// const second = {a:2};
// const firstString = JSON.stringify (first);
// const secondString = JSON.stringify(second);
// if (firstString === secondString){
//     console.log ('same')
// }
// else{
//     console.log ('difernce')
// }



// Valu same কিন্তু order মান স্থান পরিবর্তন ওলে নেগেটিভ আসবে 

// const first ={a: 2, b:6, c:5};
// const second = {a: 2, c:5, b:6,};
// const firstString = JSON.stringify (first);
// const secondString = JSON.stringify(second);
// if (firstString === secondString){
//     console.log ('positive')
// }
// else{
//     console.log ('Negative')
// }


// এটার সমাধান হচ্ছে একটা function কল করতে হবে 
const first ={a: 2, b:6, c:5};
const second = {a: 2, c:5, b:6,};
// const firstString = JSON.stringify (first);
// const secondString = JSON.stringify(second);
// if (firstString === secondString){
//     console.log ('positive')
// }
// else{
//     console.log ('Negative')
// }
function compareObject (first , second){
const firstKeys =Object.keys (first);
const secondKeys =Object.keys (second)


if (firstKeys.length === secondKeys.length){
    for (const key of firstKeys){
        
        if(first [key] !== second [key]){
            return false
        }

}
return true

}


}

const isSame = compareObject (first, second);
console.log(isSame)



