const MIN=50
const MAX=100
let number=Math.random();
document.getElementById("randnum").textContent=Math.floor(Math.random()*(MAX-MIN))+MIN

document.getElementById("generate").onclick=function(){
    document.getElementById("randnum").textContent=Math.floor(Math.random()*(MAX-MIN))+MIN
}