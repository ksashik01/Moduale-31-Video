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