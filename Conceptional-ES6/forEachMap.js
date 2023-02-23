// একটা array ভিতরে পত্যেক্টা element কে পেতে হলে forEach ব্যবহার করতে হয় ---
// forEach Function এর ভিতর থেকে কিছু return করে না

const array = [10,20,30,40,50]
// array.forEach(number => console.log (number));
array.forEach((number,indesk,a) =>{
console.log (number + ' '+indesk +' '+a )

} )


// const arrayNew=
// array.forEach (number => number*2)
// console.log (arrayNew)


// map function এর মাধ্যমে প্রত্যেক এলিমেন্ট কে পাওয়া যায় --
// map function তার প্রত্যেকটি এলিমেন্ট নূতন ভাবে একটা array রিটার্ন করে 


array.map ((number,indesk,a)=>  {
    console.log (number+ ' '+ indesk+' '+a)
})

// const arraymap=
// array.map (number => number*2)
// console.log (arraymap,array )

