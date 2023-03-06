const student ={
    name :'kodom Ali',
    money :4000,
    study :'math',
    subject: ['calcula', 'algebra'],

    exam :function (){

// console.log (this.name, 'my name is' )

return this.name + 'my name is an exam'

    },

// another method call
improveExam:function (subject){

this.Exam()
// you can also return template string--
return `${this.name} is taking improvment exam on ${subject}`

},


treatDey : function (amount){
    this.money =this.money -amount;
    return this.money

}


}

