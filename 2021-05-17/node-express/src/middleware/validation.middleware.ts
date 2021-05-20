import { Request, Response, NextFunction } from 'express';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

import { DataValidationError } from '../shared/error';

export const validationMiddleware = ( validator: any, option = {} ) => {
    return (request: Request, response: Response, next:NextFunction) => {

        validate( plainToClass(validator, request.body), {skipMissingProperties: true})
            .then( (valerrors: ValidationError[]) => {

                if (valerrors.length){
                
                    // // Handle errors have
                    const messsages = valerrors.map((valerror: ValidationError) => {
                        console.log(`Validation Errors : `, valerrors);
                        const constraints: any = valerror.constraints ? valerror.constraints : null;

                        // Deal with nestedchildren error (if any)
                        const nestedmessages: any = valerror.children?.map( (err: ValidationError) => {
                            const nestedconstraints: any = err.constraints? err.constraints : null;
                            if ( nestedconstraints ) return Object.values(nestedconstraints);
                        }).join(`, `)

                        if ( constraints ){
                            let msg = nestedmessages ? Object.values(constraints) + `, ` + nestedmessages : Object.values(constraints);
                            return msg;
                        } else
                            return nestedmessages;
                    }).join(`, `)

                    // return response.send(`Validation errors : ${messsages}`);
                    next ( new DataValidationError(messsages));
                    
                } else {
                    // No errors, handle to netx middleware
                    next();
                }
            })
            .catch( error => {
                throw error;
            })
    }
}
