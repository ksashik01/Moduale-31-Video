// const loadCountries = () =>{

// fetch ('https://restcountries.com/v3.1/all')
// .then (res => res.json ())
// .then (data => displayCountries (data))

// }


const loadCountries = ()=>{

fetch('https://restcountries.com/v3.1/all')
.then (res => res.json())
.then (data =>  displayData (data))

}





const displayData = countries => {
// console.log (countries)
const containerDiv = document.getElementById ('all-countries')

countries.forEach(country => {
    console.log (country.name);
    const divContainer = document.createElement ('div');
    divContainer.classList.add ('coutry')
    divContainer.innerHTML=`
    
    <h3>Name: ${country.name.common} </h3>
    <p> City: ${country.capital?country.capital[0]: 'no capital'}  </P>
    
    
    `
   containerDiv.appendChild (divContainer) 
});



}


loadCountries ()









// const displayCountries = countries => {

//     const contriesContainer= document.getElementById ('all-countries')

// // console.log (countries);
// // for (const country of countries)
// // console.log (country)

// countries.forEach(country => {
//     console.log (country.name.common)

//     const countryDiv = document.createElement ('div');
//     countryDiv.classList.add ('country');

//    countryDiv.innerHTML =`
   
//   <h3> Name:${country.name.common} </h3>
//   <p>Capital:${country.capital?country.capital [0]: 'no capital' } </p>
   
//    `
//    contriesContainer.appendChild(countryDiv);
    
// });

// }






// loadCountries()



