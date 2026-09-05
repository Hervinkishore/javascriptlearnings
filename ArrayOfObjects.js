const fruits=[{name:"apple",color:"red",calories:75},
               {name:"bannana",color:"yellow",calories:80},
               {name:"orange",color:"orange",calories:90},
               {name:"pineapple",color:"yellow",calories:80}];
// fruits.forEach((element)=>console.log(element.name));
// const fileteredFruits=fruits.filter((element)=>element.name==="orange");
// console.log(fileteredFruits)
// const fileteredFruits=fruits.find(Element=>Element.name==="apple");
// console.log(fileteredFruits)
// const mappedfruits=fruits.map(Element=>Element.name)
console.log(fruits.reduce((ProgressEvent,curr)=>Math.max(ProgressEvent,curr.calories),0));
