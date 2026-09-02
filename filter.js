const age=[12,11,13,19,18,20];
age.forEach(display)
const updatedage=age.filter(eligible);
updatedage.forEach(display);
function eligible(x){
    return x>17;
}
function display(x){
    console.log(x);
}