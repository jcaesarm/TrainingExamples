
class ExtendedError extends Error{
    
    status: number;
    origin: string;

    constructor (status: number, origin: string, message:string ){
        super (message)
        this.status = status;
        this.origin = origin;
    }
}

export class AdaptorError extends ExtendedError{

    constructor (error:any){
        super(500, `Adaptor Layer`, `Server error : ${error.message}`);
    }
}

export class EntityNotFoundError extends ExtendedError{

    constructor (id:string){
        super(400, `Route Layer`, `Entity with ${id} not found!`);
    }
}

export class APINotImplementedError extends ExtendedError{

    constructor (route:string){
        super(400, ` Application Middleware`, `API ${route} not found!`);
    }
}

export class RouteNotImplementedError extends ExtendedError{

    constructor (route:string){
        super(400, `Application Middleware`, `Route ${route} not found!`);
    }
}

export class PersistanceConnectivityError extends ExtendedError{

    constructor (error:any){
        super(500, `Application Layer`, `Connectivity Issue : ${error.message}`);
    }
}

export class DataValidationError extends ExtendedError{

    constructor ( messsages:string ){
        super(400, `Route Layer`, `Validation Error : ${messsages}`);
    }
}

export class AuthError extends ExtendedError{

    constructor ( messages:any ){
        super(401, `Auth Middleware`, `Error : ${messages}`);
    }
}