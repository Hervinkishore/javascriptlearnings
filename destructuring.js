const person1={
    firstName:"hervin",
    lastName:"kishore",
    age:20,
    job:"employed"
}
const person2={
    firstName:"kumara",
    lastName:"ganesh",
    age:25,
}
const {firstName,age,lastName,job="unemployed"}=person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

const arr=[10,20,30,40,50];
const [one,two,three,four,five,six=90]=arr;
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);