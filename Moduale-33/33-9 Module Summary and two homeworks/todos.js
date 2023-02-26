function loadTodos (){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => displayTodos(data))
}

function displayTodos(numbers){


console.log (numbers)

const todoContainer= document.getElementById ('todo-container')
for (const number of numbers){
const todoDiv = document.createElement ('div');
todoDiv.innerHTML =`

<h3> title:${number.title} </h3>
<h4> id: ${number.id} </h4>
<p> Is completed : ${number.completed===true ? 'complete' : 'not completes'} </p> 


`
todoContainer.appendChild (todoDiv)

}


}

loadTodos ();

// 1. What is an api ?
// 2.what are the http methood supported by rest ?
// 3.can you get requste instead of put to craete a    resorce ?
// 4. what is the different between put and post ?
// 5. what is json
// 6.what are crud operation  
// 7. what is the file extension of json
// 8. what are the data types supported ny json
// 9. what is the role of json.stringify ?
// 10. show how to parse json 
// 11/get vs post 

