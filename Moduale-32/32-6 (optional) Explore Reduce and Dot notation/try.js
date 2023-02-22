//---------- Reduce java script----------------//

const numbers =[12,10,23,25,30,50,5,40,15];


const products = [

{id:1, name:'laptop', price:100000},
{id:1, name:'mobile', price:140000},
{id:1, name:'bag', price:4000},
{id:1, name:'walton', price:45000},
{id:1, name:'her', price:3000},

]
// .reduce (accumulaFunction, initial value)

const total =numbers.reduce ((previous , current)=> previous+current,0);
console.log (total)
// if you want to return
const totalAmount=numbers.reduce ((previous,current)=>{
console.log(previous,current)

return previous + current
}

 ,2)

//----------  notation javaScript-----------------
const student= {

    name:'kolim uddin',
    age :15,
    class:'ten',
    marks:{
        math:78,
        physics:89,
        chemistry:65,
    }
}
// only obejct use------
const marks= student.marks;
console.log (marks);

// object use object------
const math = student.marks.math;
console.log (math)
// --only use propertity------

const chemistry= student ['marks']['chemistry'];
console.log (chemistry);

// ---another way----------
const subject='physics';
const subjectMarks = student.marks[subject];
console.log (subjectMarks)

