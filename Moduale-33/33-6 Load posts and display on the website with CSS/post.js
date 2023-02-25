function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        
        .then(res => res.json())
        .then (data => displayPost (data))
}

function displayPost(posts) {
    const postContainer = document.getElementById('post-cotainer');

    for (const post of posts) {
        
        console.log(post)
        
        const div = document.createElement('div');
        div.classList.add ('post-color')

        div.innerHTML = `
        
        <h1>user- </h1>
             <h4>user-${post.userId}</h4>
            <h5>post-title:${post.title} </h5>
            <p>discription${post.body}  </p>
        
        
        
        `

postContainer.appendChild (div)



    }



}


loadPost()

// 1.get the container element where you want to add the new element