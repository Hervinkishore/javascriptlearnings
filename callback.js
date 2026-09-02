sum(displayPage,10,20);
function sum(callback,x,y){
    let result=x+y;
    callback(result);
}
function displayPage(result){
    document.getElementById("myH1").textContent=result;
}