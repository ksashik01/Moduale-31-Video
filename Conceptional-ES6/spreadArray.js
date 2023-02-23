
// Array ভিতরে নম্বর গুলো আলাদা ভাবে পেতে spread Array operator ব্যবহার করতে হবে 
const phone =[2,3,4,5,6];
console.log (...phone)

// Array ভিতরে সব থেকে ছোট নম্বর  বাহির করার জন্য Math.min এর সাথে  spread Array operator ব্যবহার করতে হবে 

const phone2 =[2,3,4,5,6];
console.log (Math.min (...phone2));

// একটা Array ভিতরে চাইলে অন্য আর একটি array ভিতরে রাখা যায় 

const phone3= [8,9,...phone, 99]
console.log (phone3);

// একটা Array ভিতরে  আর একটি array ভিতরে রাখার পর যদি নূতন কোন element যুক্ত করতে চাও তাহলে Spread Operator ব্যবহার করতে হবে 

const symphony= ['nova', 'iphone', 'walton']
const nokia=[...symphony];
symphony.push ('Voda Phone');
nokia.push ('Xiomei')

console.log (symphony);
console.log (nokia);

// এরে ভিতরে কোন নিদিষ্ট Element কে সেট করতে চাইলে তার indesk কে varriable মাদ্দমে ধরতে হবে। 

const light= [10,20,30,40, 50, 10];

const num = light [0];
const num2 = light [1];
const num3 = light [2];
console.log (num,num2)

// Spread oparetor এরে ভিতরে কোন নিদিষ্ট Element কে সেট করতে চাইলে তার indesk কে varriable মাদ্দমে ধরতে হবে। 
const numbers= [10,20,30,40, 50, 10];
const[number1,number2,...spreadValue ] = numbers;
console.log (number1,number2,spreadValue);
console.log (spreadValue);