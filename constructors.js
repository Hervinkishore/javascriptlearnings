// function Car(){

// }
function Car(brand,model,year){
    this.brand=brand;
    this.model=model;
    this.year=year;
    console.log("Hello!!!")
}


const car1=new Car("Ford","Mustang","1969");
console.log(car1);