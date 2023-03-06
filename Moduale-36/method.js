
const output= student.exam()
// console.log (output)
const reExam = student.improveExam('Algebra');
// console.log (reExam)
const remainig = student.treatDey(900);
console.log (remainig);


const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]
console.log (getAge)