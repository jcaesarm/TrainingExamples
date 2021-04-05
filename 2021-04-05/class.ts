import { getDefaultCompilerOptions } from "typescript";

// Object literal
let obj3 = {
    name: 'Steve', 
    age:21,
    printAge: function(){
        console.log('Age...');
    }
}
obj3.printAge;


// Class
// Template / Blueprint
//Scope: public, private, protected
//initialization : constructor
// Extending : extends
class Person {

    public name: string;
    public age: number;
    // private age: number;
    protected type: string = 'Person';

    // constructor( ){ //default
    // }
    constructor( namex:string, agex:number){
        this.name = namex;
        this.age = agex;
    }

    public printAge( ){
        console.log('Age...');
    }
}

// Object, Using the remplate/blueprint
const john = new Person( 'Steve', 21 );
john.printAge( );

class Student extends Person {
    public major: string = '';

    constructor (name:string, age:number, major: string){
        super(name, age);   
        this.major = major;
    }
}

const mike = new Student( 'Mike', 23, 'Maths');


//-------------------------------------
// Getters & Stters
class Person1{
    public name: string = '';
    private _age: number = 0;

    get age(){
        return this._age;
    }

    set age (value: number){
        if ( value > 150 ){
            console.log('Please give a valid age!');
            return;
        }
        this._age = value;
    }
}

let obj = new Person1();
obj.name = 'Steve'; //<-get this value from textbox
obj.age = 2100; //<-get this value from textbox
console.log(obj)

function saveToBD ( obj: Person1 ){
    //saves to adaptor....
}

//----------------------------------------

// Static
class Helper {
    static readonly PI: number = 3.14;

    static calculateCircumference( dia:number ){
        return Helper.PI * dia;
    }

    saveToDB() {
        console.log('Ssave to db....')
    }
}

let obj4 = Helper.calculateCircumference( 12 );
//Helper.PI = 4.15;
console.log(obj4);

let obj5 = new Helper( );
console.log(obj5);
// let result4 = obj4.calculateCircumference( 12 );

//----------------------------------------
//Abstract class 
abstract class Employee {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
    abstract getSalary() :number;

    getDetails():string{
        return `Name: ${this.name} id: ${this.id}`;
    }
}

class Developer extends Employee{
    getSalary(){
        return 7000;
    }
}
//You can not create an object from an abstract class

let tom=new Developer('tom',1);


//---------------------------------
//Interface

interface  IEmployee1{
    name:string;
    id: string;
    getDetails():string;
}
class Employee1 implements IEmployee1{
    name:string;
    id:string;
    constructor(name:string,id:string){
        this.name=name;
        this.id=id;
    }
    getDetails():string{
        return `Name: ${this.name} id: ${this.id}`;
    }

}

let epm1 = new Employee1 ('Mark','sh2');

interface IEmployeeNew extends IEmployee1{
    age:number;
}

//---------------------------------

//1.- Create an interface for encryptor
//2.- Create an Encryptor base class
//3.- Create concrete/specializad class 
interface Encryptor {
    doEncrypt(data:string):string;
    doDecrypt(data:string):string;
}

class SymetricEncryption implements Encryptor{
    constructor(){}
    doEncrypt(data:string):string{
        return data;
    }
    doDecrypt(data:string):string{
        return data;
    }

}
class ASymetricEncryption implements Encryptor{
    constructor(){}
    doEncrypt(data:string):string{
        return data;
    }
    doDecrypt(data:string):string{
        return data;
    }
}
//usage
let enc = new SymetricEncryption();
let result = enc.doEncrypt('Hello!!');