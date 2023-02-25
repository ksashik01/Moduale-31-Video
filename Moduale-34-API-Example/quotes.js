
// Arrow Function----------------

const loadQuote = () =>{
    fetch ('https://api.kanye.rest/')
    .then (res => res.json())
    .then (data =>  displayQuote (data))
}
const displayQuote = quote =>{
console.log (quote)
const blockQote = document.getElementById ('quote')
blockQote.innerHTML = quote.quote;

}
loadQuote()