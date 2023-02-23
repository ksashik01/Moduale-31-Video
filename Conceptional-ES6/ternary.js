const isStudent = true;
let x = 7;
let paragraph ;

// if(isStudent === true){
//     paragraph = 'he is a student';
// }else{
//     paragraph = 'porasuna vallagena';
// }

//  (x === 5) ? console.log('he is student') : console.log('no student')
 
paragraph = (isStudent === true) ? "he is student" : " porasuna vallagena"

console.log(paragraph)



const isReuslt =false;

if (isReuslt===true){
    console.log ('he is a good student')
}
else {
    console.log ('he is not a student')
}

// ternary simple function করার নিয়ম 

(isReuslt===true)? console.log ('this is ternary type'): console.log ('not type')


// varriable diclare করার মাধ্যমে ternary simple function করার নিয়ম 

student= (isReuslt===true)?('good'):('bade')
console.log (student)

// == শুধু মাত্র valu কে চেক করে তার মানকে না 
// === value সাথে সাথে তার মান কে ও চেক করে 