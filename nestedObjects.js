const person1={
    fullName:"Hervin kishore",
    age:20,
    isStudent:true,
    hobbies:["Reading","Singing","Gaming"],
    address:{
        street: "Nagarajapuram street",
        city:"Chennai",
        state:"Tamilnadu"
    }
}
for(const hobbie in person1.hobbies){
    console.log(hobbie);
}
for(const hobbie of person1.hobbies){
    console.log(hobbie);
}
for(const add in person1.address){
    console.log(`${add} : ${person1.address[add]}`);
}
for(const add of person1.address){
    console.log(add);
}