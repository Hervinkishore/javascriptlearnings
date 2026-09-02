const kevin={
    name:"kevin",
    age:11,
    std:"7th",
    school:"Velammal nexus",
    greet:()=>{
        console.log(`Hi there im ${this.name}, How r u there`)
    }
}
const kishore={
    name:"kishore",
    age:20,
    std:"4th",
    college:"Panimlar Engineering College",
    greet:function(){
        console.log(`Hi there im ${this.name}, Why the hell r u here!!😤`)
    }
}
kevin.greet();
kishore.greet();