// function greet(){
//     console.log("hello there!!");
// }

// const greet=()=>{console.log("hello there")};

const numbers=[1,2,3,4,5,6,6]
console.log(numbers);
const squares=numbers.map((element)=>Math.pow(element,2));
console.log(squares);
const cubes=numbers.map((element)=>Math.pow(element,3));
console.log(cubes);
const evenNumbers=numbers.filter((element)=> element%2===0);
const total=numbers.reduce((acumulator,curr)=> acumulator+=curr);
console.log(evenNumbers);
console.log(numbers);
console.log(`total of all the numbers is $${total}`)
const greet=setTimeout(() => {
    console.log("hello");
}, 3000);