import { Request, Response, NextFunction, RequestHandler } from 'express';
var nJwt = require('njwt');

import {AuthError} from '../shared/error';

export const authMiddleware = ( ): RequestHandler => {

    return (request: Request, response: Response, next:NextFunction) => {

        //retreve token from header
        const token = request.header(`AUTH_TOKEN`);

        if ( token ){
            //verify token is not tampered!
            nJwt.verify(token, `yyy`, 
                (error: any, jwt:any) => {
                    if ( error ){
                        next ( new AuthError(error.message) );

                    } else {
                        next( );
                    }
                }
            );
        } else{
           next( new AuthError(`UnAuthorized Access!`));
        }  
    }
}