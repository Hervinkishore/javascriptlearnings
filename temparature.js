

document.getElementById("submit").onclick=function(){
    var data =document.getElementById("data").value;
    console.log(data);
    
    if(document.getElementById("ctof").checked){
        data=data*(9/5)+32;  
        document.getElementById("result").textContent="Temperature(F) :"+data+"° F"
    }
    else if(document.getElementById("ftoc").checked){
        data=(data-32)*5/9;
        document.getElementById("result").textContent="Temperature(C) :"+data+"° C"
    }
    else{
        document.getElementById("result").textContent="Enter which type of convertion"
    }
}