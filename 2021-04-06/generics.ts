// Generics - separate logic from type
function echo (data: any ) : any {
    return data;
}

echo('hello');
echo(21);
echo(true);
echo({name: 'Steve', age:21});

function betterEcho<T> (data: T ) : T {
    return data;
}
betterEcho<string>('hello');
betterEcho<number>(21);
betterEcho<boolean>(true);
betterEcho<{name:string, age: number}>({name: 'Steve', age:21});


let myHobbies5: any[] = ['cooking', 'baseball'];
let myHobbies6: Array<string> = ['cooking', 'baseball'];
let myHobbies7: Array<number> = [12, 15];
let myHobbies8: Array<boolean> = [true, false];
let myHobbies9: Array<{}> = [{}, {}];

type myType = {name: string, age: number};

// class Collection<T extends {name: string, age: number} | {name: string, address:string}>
class Collection<T extends string | myType> {
    add( data: T ){
        console.log(data);
    }
}

let obj10 = new Collection<string>( );
obj10.add('hello');

let obj11 = new Collection<myType>( );
obj11.add({name: 'Steve', age: 21});

// let obj12 = new Collection<boolean>( );
// obj12.add(true);

