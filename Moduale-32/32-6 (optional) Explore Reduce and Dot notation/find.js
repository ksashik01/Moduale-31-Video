const numbers =[12,10,23,25,30,50,5,40,15];

const products = [

    {id:1, name:'laptop', price:100000},
    {id:1, name:'mobile', price:140000},
    {id:1, name:'bag', price:4000},
    {id:1, name:'walton', price:45000},
    {id:1, name:'her', price: 23000},
    
    ];

 // find শুধু শর্ত মোতাবেক প্রথমটাকে দিবে ----
 const findnumber= numbers.find (number=> number % 5==0 )
 console.log (findnumber)

 const productNumbers= products.find (product => product.price<50000 );
console.log (productNumbers)