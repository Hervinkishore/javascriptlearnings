class Student{
    static noOfStudents=0;
    constructor(firstName,lastName,age,marks){
        Student.noOfStudents++;
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.marks=marks;
    }
    get _firstName(){
        return this.firstName;
    }
    get _lastName(){
        return this.lastName;
    }
    get _fullName(){
        return this.firstName+" "+this.lastName;
    }
    get _age(){
        return this.age;    
    }
    get _marks(){
        return this.marks;
    }

}
const kg=new Student("Kumara","Ganesh",19,80);
const kishore=new Student("Hervin","Kishore",20,70);
const js=new Student("Minnal","",30,90);
console.log(kg._fullName);
console.log()