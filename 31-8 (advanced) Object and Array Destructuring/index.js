
// 1.obejct porpertity name also can diclare a variable 
//     * fish = obejct;
//     * address, phone = propertiy;
//     * 


const fish = {
    name: 'king hilsa',
    address: 'dhanmondhi',
    phone: '01733485477',
    prize: 4000
}

const phone = fish.phone
console.log(phone);
const address = fish.address;
console.log(address)

// another simple way obeject array use for obeject......
const { name, phon, age } = {
    name:'ashik', age: 25, address: 'dhanmondhi', phon: 01765554, thana: 'dhaka',
}
console.log(name, age, phon)
 
// another way single object diclare--phone-propertity,object=fish-- 

const { prize } = fish;
console.log(prize)


// array Destructuring-------serial ways number count -------
const [first, another] = [44, 99]
console.log(first, another);

// -------another ---

const nayoks = ['sakib', 'bappi', 'raj'];
const [kings, lost, noton] = nayoks;
console.log(noton);

// function Destructuring

function getnames(){

    return ['alim', 'halim'];
}
const [num, num1] = getnames();
console.log(num, num1)
