const marks=[10,20,30,40,50];
marks.forEach(display);
const updatedMarks=marks.map(double);
updatedMarks.forEach(display);
function double(x){
    return Math.pow(x,2);
}
function display(x){
    console.log(x);
}