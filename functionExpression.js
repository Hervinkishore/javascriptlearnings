let nuumbers=[10,20,30,40,50];

const func=nuumbers.map(function(element){
    return Math.pow(element,2);
});
console.log(func);
console.log(nuumbers);

const cube=nuumbers.forEach(function(element,index,arr){
    arr[index]=Math.pow(element,3);
})
console.log(nuumbers);