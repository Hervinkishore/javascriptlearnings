const fruits=["apple","orange","bannana","kiwi"];
fruits.forEach(display);
fruits.forEach(capitalize);
fruits.forEach(display);
function capitalize(element,index,arr){
    arr[index]=element.charAt(0).toUpperCase()+element.slice(1);
}
function display(x){
    console.log(x);
}