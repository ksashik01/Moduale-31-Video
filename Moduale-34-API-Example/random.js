
const loaduser= () =>{

fetch ('https://randomuser.me/api/?gender=female')
.then (res => res.json ())
.then (data => displayUser(data))

}

const displayUser = user => {

    const genderTag= document.getElementById ('gender');
    genderTag.innerText=user.results[0].gender;

const nameuser=  user.results[0] .name.title+' '+user.results[0].name.first+' ' +' '+user.results[0].name.last;

document.getElementById('name').innerText=  nameuser;

 document.getElementById('location')



 
 

    
}




loaduser()