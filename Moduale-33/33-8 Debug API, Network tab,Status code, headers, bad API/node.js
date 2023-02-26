
function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}


function patchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}



function CreateAPost(){

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

}
CreateAPost()