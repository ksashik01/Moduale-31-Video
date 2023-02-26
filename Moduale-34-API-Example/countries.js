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


<<<<<<< HEAD



const displayData = countries => {
// console.log (countries)
const containerDiv = document.getElementById ('all-countries')

countries.forEach(country => {
    console.log (country.name);
    const divContainer = document.createElement ('div');
    divContainer.classList.add ('coutry')
    divContainer.innerHTML=`
=======
const displayCountries = countries => {

    const contriesContainer= document.getElementById ('all-countries')


countries.forEach(country => {
    console.log (country.cca2)

    const countryDiv = document.createElement ('div');
    countryDiv.classList.add ('country');

   countryDiv.innerHTML =`
   
  <h3> Name:${country.name.common} </h3>
  <p>Capital:${country.capital ? country.capital[0] : 'no capital' } </p>
  <button onclick="displayCountryDetails('${country.cca2}')">Details</button>
   
   `
   contriesContainer.appendChild(countryDiv);
>>>>>>> 20757eb2f6c335a8ec614795374bd80071489f3c
    
    <h3>Name: ${country.name.common} </h3>
    <p> City: ${country.capital?country.capital[0]: 'no capital'}  </P>
    
    
    `
   containerDiv.appendChild (divContainer) 
});
<<<<<<< HEAD



}


loadCountries ()



=======
    
}

 const displayCountryDetails = code => {
      
    //    https://restcountries.com/v3.1/alpha/{code}
     const url =`https://restcountries.com/v3.1/alpha/${code}`
    //  console.log(url)
     
     fetch(url)
         .then(res => res.json())
        .then (data => showdCountryDetails(data[0]))
      
}  
const showdCountryDetails = country => {
    console.log (country)
      
    const detailContainer = document.getElementById('county-details')
    detailContainer.innerHTML = `
    
<h3>Name:${country.name.common}</h3>
<img src ="${country.flags.png}">
    
    `
  }
    
>>>>>>> 20757eb2f6c335a8ec614795374bd80071489f3c






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



