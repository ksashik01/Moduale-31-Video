const petOwner = {
  name: "Jolonto Kholil",
  contact: {
    phone: "09376253",
    email: "xyz@gmail.com",
  },
  pet: {
    name: "Lofie",
    info: {
      color: "black",
      weight: "1.2kg",
    },
  },
};
// Object এর ভিতরের যদি সঠিক কোন propertity নাম না থাকে তাহলে প্রথম বার undifiend আসবে আবার সেই properity ভিতরে যদি ভ্যালু খুঁজতে চাই তাহেল erorr খেয়ে বসতে হবে  
// console.log (petOwner.dog.togy)

// error থেকে বাঁচে হলে obejct এর পরে অপশনাল Chaining ? ব্যবহার করতে হবে তাহলে error দিবে না
console.log (petOwner?.dog?.togy) 



