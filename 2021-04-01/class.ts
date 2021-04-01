// Object literal
let obj3 = {
    name: 'Julio', 
    age:23,
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
const julio = new Person( 'Julio', 23 );
julio.printAge( );

class Student extends Person {
    public major: string = '';

    constructor (name:string, age:number, major: string){
        super(name, age);   
        this.major = major;
    }
}

const cesar = new Student( 'Cesar', 23, 'Maths');


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
obj.name = 'Julio'; //<-get this value from textbox
obj.age = 2100; //<-get this value from textbox
console.log(obj)

function saveToBD ( obj: Person1 ){
    //saves to adaptor....
}

//----------------------------------------

// Static
class Helper {
    static PI: number = 3.14;

    static calculateCircumference( dia:number ){
        return Helper.PI * dia;
    }

    saveToDB() {
        console.log('Save to db....')
    }
}

let obj4 = Helper.calculateCircumference( 12 );
console.log(obj4);

let obj5 = new Helper( );
console.log(obj5);
// let result4 = obj4.calculateCircumference( 12 );