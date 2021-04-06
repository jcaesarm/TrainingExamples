// Decorators
function Encryption( abc: Function ){
    // encryption here
    console.log('Encrypt from decorator!');
    let data = 'Encrypted data';
    // encrypt data
    abc.prototype.save( data );
}

function decoratorName3( abc: Function){
    console.log('Hi from decorator 3');
}

@decoratorName3
@Encryption

class Database5{
    data: string;

    constructor( data:string ){
        this.data = data;
    }

    save( data : string ) {
        // database saving here
        console.log('Save to DB...', data);
    }
}


