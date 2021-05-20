import { Request, Response, NextFunction } from 'express';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

import { DataValidationError } from '../shared/error';

export const validationMiddleware = ( dto: any) => {
    return (request: Request, response: Response, next:NextFunction) => {

        validate( plainToClass(dto, request.body))
            .then( (errors: ValidationError[]) => {

                if (errors.length){
                    console.log(`Validation Errors : `, errors);

                    // Handle errors have
                    const messsages = errors.map((error: ValidationError) => {
                        const constraints: any = error.constraints ? error.constraints : null;
                        return Object.values(constraints);
                    }).join(', ')

                    next ( new DataValidationError(messsages));
                    
                } else {
                    console.log(`No Validation Errors : `);
                    // No errors, handle to netx middleware
                    next();
                }
            })
    }
}
