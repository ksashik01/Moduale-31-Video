const loadPhones = async(searchText, dataLimit) => {
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch (url);
    const data =await res.json ()
    displayphones(data.data,dataLimit)
     
}

const displayphones = (phones,dataLimit) =>{
const phonesContainer = document.getElementById ('phone-container') ;


phonesContainer.textContent='';


// <!-- show all ক্লিক করলে যেন ইমেজ load হয়  -->
const showAll =document.getElementById('show-all')


if (dataLimit && phones.length > 10){
  showAll.classList.remove ('d-none');
  
  }

  else{

    showAll.classList.add('d-none')


  }







const noPhone= document.getElementById('no-found-message');
if (phones.length === 0){
    noPhone.classList.remove('d-none');
}
else{
    noPhone.classList.add('d-none');
}



// display only 10 phone--------//
phones = phones.slice (0,10);
// ---waring message---------///

phones.forEach(element => {
console.log (element)
    const phoneDiv = document.createElement ('div');
  phoneDiv.classList.add('col');
   phoneDiv.innerHTML =
    `
    <div class="card">
            <img  src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.phone_name}</h5>
              <p class="card-text">Thsi for my country hello sumit</p>
              <button onclick="loadPhoneDetails('${element.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailMdal
              "> Deatils </button>

            </div>
          </div>

    
    ` ;
    phonesContainer.appendChild(phoneDiv)
    

});

// stop spiner or loader
toggleSpinner (false)

}

const processSearch = (dataLimit) =>{

  toggleSpinner(true)
  const searchField = document.getElementById('search-field')
  const searchText =searchField.value ;
  searchField.value =''
  loadPhones(searchText, dataLimit);


}


document.getElementById('btn-search').addEventListener ('click', function(){
  processSearch(10);

})

document.getElementById('search-field').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    processSearch(10)
  }
});






// ১.  load spiner চালু করতে হলে একটা function কে কল করতে হবে 
// ২. যেই button click করলে লোড spiner চালু হবে তার নিচে function লিখতে হবে 
// ৩. ফাঙ্কশন condition ট্রু অথবা false বেবহার করতে হবে 
// ৪.condition এর ভিতরে class list add অথবা remove করতে হবে 
// ৫.button click করার পর যেহেতু image load হবে তার পর যেন লোড spriner না চলে সেখানে false parameter চালু করতে হবে 


const toggleSpinner  = isLoading => {

const loaderSection =document.getElementById ('loader');
if (isLoading){

loaderSection.classList.remove('d-none')

}

else{
loaderSection.classList.add('d-none')

}

}




document.getElementById('show-all-button').addEventListener ('click',function(){


   processSearch ()


})






const loadPhoneDetails = async id =>{
const url =`https://openapi.programming-hero.com/api/phone/${id}`;
const res = await fetch (url);
const data =await res.json ();
phoneDetailMdal (data.data)


}

const phoneDetailMdal = phone =>{
console.log (phone);
const modalTitle = document.getElementById ('phoneDetailMdalLabel');
modalTitle.innerText=phone.name;
const phoneDeatils = document.getElementById ('phone-details');
phoneDeatils.innerHTML=`
<p>Relate Date:${phone.releaseDate ? phone.releaseDate : 'no relase date found'}</p>

<img src="${phone.image? phone.image : 'no image found'}" alt="">

`








}










loadPhones(phone)

