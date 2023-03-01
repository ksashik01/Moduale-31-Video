const loadPhones = async(searchText) => {
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch (url);
    const data =await res.json ()
    displayphones(data.data)
     

}

const displayphones = (phones) =>{
const phonesContainer = document.getElementById ('phone-container') ;
phonesContainer.textContent='';
// display only 10 phone--------//
phones = phones.slice (0,10);
// ---waring message---------///
const noPhone= document.getElementById('no-found-message');
if (phones.length === 0){
    noPhone.classList.remove('d-none');
}
else{
    noPhone.classList.add('d-none');
}
phones.forEach(element => {
console.log (element)
    const divDiv = document.createElement ('div');
    divDiv.classList.add('col');
    divDiv.innerHTML =
    `
    <div class="card">
            <img  src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.phone_name}</h5>
              <p class="card-text"></p>
            </div>
          </div>
    
    ` ;
    phonesContainer.appendChild(divDiv)
    

});


}

document.getElementById('btn-search').addEventListener ('click', function(){
const searchField = document.getElementById('search-field')
const searchText =searchField.value ;
searchField.value =''
loadPhones(searchText)

})


loadPhones()