class Student{
    static noOfStudents=0;
    constructor(firstName,lastName,age,marks){
        Student.noOfStudents++;
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.marks=marks;
    }
    set firstName(newFirstName){
        this._firstName=newFirstName;
    }
    set lastName(newLastName){
        this._lastName=newLastName;
    }
    set age(newAge){
        this._age=newAge;
    }
    set marks(newMarks){
        this._marks=newMarks;
    }
    get firstName(){
        return this._firstName;
    } 
    get lastName(){
        return this._lastName;
    } 
    get age(){
        return this._age;
    }
    get marks(){
        return this._marks;
    }

    

}
const kg=new Student("Kumara","Ganesh",19,80);
const kishore=new Student("Hervin","Kishore",10,70);
const js=new Student("Minnal","",30,90);
console.log(kg.firstName);
console.log(kg);
console.log(kishore);
