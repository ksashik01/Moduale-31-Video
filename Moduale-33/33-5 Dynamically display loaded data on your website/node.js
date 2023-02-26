function loaduser2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then (data => displayuser2(data))

}

function displayuser2 (data) {
 
    const ul = document.getElementById('user-list');
     
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li)

    }

}