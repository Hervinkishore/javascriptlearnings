// let arr=["apple","banana","orange","apricot"]
// console.log("before sort: ");

// console.log(arr);
// arr.sort();
// console.log("after sort")
// console.log(arr);
// let arr=[1,2,3,4,5,6,7,50]
// console.log(Math.max(...arr))


function sum(...nums){
    let sum=0;
    for(let num of nums){
        sum+=num;
    }
    return sum;
}
function average(...nums){
    console.log(sum(...nums));
    console.log(nums.length);
    return sum(nums)/nums.length;

}
let total=sum(1,2,3,4,5,6);
console.log(`your total sum is $${total}`);
let avg=average(1,2,3,4,5,6);
console.log(`Your total average is $${avg}`);
console.log([1,2,3,4,5,6].join(" "),typeof([1,2,3,4,5,6].join(" ")))