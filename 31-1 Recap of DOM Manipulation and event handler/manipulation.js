document.getElementById ("click-btn").addEventListener ('click', function(){


const numbers= document.getElementsByClassName("friend");
for (const number of numbers){

    number.style.backgroundColor="green";
 

}


})

document.getElementById("center-btn").addEventListener('click', function(){

const textCenter= document.getElementById("text-center")

textCenter.style.textAlign="center"


})

document.getElementById ("new-btn").addEventListener('click', function (){

    const divContainer = document.getElementById ("container");

    const newDiv = document.createElement ("div");
    newDiv.classList.add ("friend");

newDiv.innerHTML=`

<h3 class="friend-name" >friend-6</h3>
    <p>Quia laboriosam eveniet earum cupiditate!</p>

    
`;
divContainer.appendChild(newDiv);


})