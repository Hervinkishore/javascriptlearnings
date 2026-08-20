let number=Math.random();
document.getElementById("randnum").textContent=number

document.getElementById("generate").onclick=function(){
    document.getElementById("randnum").textContent=Math.random()
}