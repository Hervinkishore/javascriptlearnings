// let FirstName=`hervin`
// let age=20
// let isStudent=true
// document.getElementById("myH1").textContent= `My name is ${FirstName}`;
// document.getElementById("myP").textContent=`I am ${age} years old`
// document.getElementById("myp").textContent=`Enrolled : ${isStudent}`
// var data;
// data=window.prompt("Enter the age")
// console.log(data)


let count=0;
document.getElementById("count").textContent=`Count: ${count}`
document.getElementById("inc").onclick=function(){
    count++
    document.getElementById("count").textContent=`Count: ${count}`
    
}
document.getElementById("0").onclick=function(){
    count=0
document.getElementById("count").textContent=`Count: ${count}`
}
document.getElementById("dec").onclick=function(){
    count--
document.getElementById("count").textContent=`Count: ${count}`
}