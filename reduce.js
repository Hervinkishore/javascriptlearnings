let marks=[10,20,30,40,50,60,90];
function findingmax(max,curr){
   return Math.max(max,curr);
}
console.log(marks.reduce(findingmax));