// const myObj = {
//   id: 1,
//   name: "Rokib",
//   job: "Web Instructor",
// };
// console.log(Object.keys(myObj));

// // const arr = [14, 15, 4, 14, 25];
// // arr.forEach((value) => {
// //   // console.log(value);
// // });

// // for (let value of arr) {
// //   console.log(value);
// // }

// // https://restcountries.com/v3.1/alpha/${id}

const loadData = () => {

  fetch("https://jsonplaceholder.typicode.com/posts")
    
    .then((res) => res.json())
    .then((data) => showData(data))
   .catch ((err) => {
  console.log (err) 
});

}

const showData = (data) => {

  console.log (data.slice (0,20))
  for (let singleData of data.slice (0,20)) {
    
    const containerDiv = document.getElementById("post-info");
    const divContainer = document.createElement("div");
    divContainer.innerHTML = `
   <h3 class="text-3xl text-center">Title: ${singleData.title} </h3>;
  
  
    `
    
containerDiv.appendChild (divContainer)


  }
    
    
    
    
    
}







loadData()
