fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response =>console.log(response))
   

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fecth (url)
// .then (response => response.json ())
// .then (json => console.log (json))

function clickBoard(){

fetch (url)
.then (response => response.json ())
.then (json => console.log (json))

}