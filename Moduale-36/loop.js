const bottle ={color:'yello', price:50, isClened:true,capacity:1}

// কোন একটা object এর উপরের সরাসরি for loop ব্যবহার করা যায় না তবে obejct এর propertiye গুলো এসে loop চালানো যায় ---

const keys = Object.keys(bottle);
// console.log (keys)
// 3 ways to read object properties

//1.. bottle.color 
//2.. bottle ['color']
//3.. bottle [key]

for (const key of keys){
    // console.log (key)
  
}

// কোন একটা object এর উপরের সরাসরি for loop ব্যবহার করা যায় না তবে for in ব্যবহার করা যায় ---

for (const key in bottle){
    const value = bottle [key];
    console.log (key ,value)
}

// const pair =Object.entries (bottle);
// for (const [key , value] of Object.entries (bottle) ){
// console.log (key,value)

// }