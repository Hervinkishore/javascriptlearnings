// class Car{
//     static count=0;
//     constructor(brand,model,color){
//         Car.count++;
//         this.brand=brand;
//         this.model=model;
//         this.color=color;
//     }
//     static getCount(){
//         console.log(count);
        
//     }

// }
// let c1=new Car("ford","mustang","red");
// console.log(Car.count);
class MathUtil{
    static PI=3.14159;
    static getDiameter(radius){
        return radius*2;
    }
    static getCircumference(radius){
        return radius*2*MathUtil.PI;
    }
}
