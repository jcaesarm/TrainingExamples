import { Request, Response, NextFunction} from 'express';

import { handleAsync } from '../shared/utilities';
import { IService } from '../services/index.service';
import { IRoute, Route } from './index.route';
import { EntityNotFoundError } from '../shared/error';
import { validationMiddleware } from '../middleware/validation.middleware';
import { UsersValidator } from '../models/users.validator';

class UsersRoute extends Route{

    register = ( api: string, service: IService ): IRoute => {

        this.api = api;
        this.service = service;

        this.router.post(`/`, validationMiddleware(UsersValidator), this.post);
        this.router.get(`/`, this.get);
        this.router.get(`/:id`, this.getOne);
        this.router.patch(`/:id`, validationMiddleware(UsersValidator, {skipMissingProperties: true}), this.patch);
        this.router.delete(`/:id`, this.delete);
        return this;
    }

    get = async( request: Request, response:Response, next:NextFunction ) => {

        let getOption = request.query.name;

        let [items, error] = await handleAsync(this.service.find(getOption));

        if (error) return next( error );
        response.send(items);
    }

    delete = async( request: Request, response:Response, next:NextFunction ) => {

        const id = request.params.id;
    
        let [deleteResponse, error] = await handleAsync(this.service.delete(id));

        if (error) return next( error );
        if (deleteResponse.affected === 1){
            response.send({deleted: true, message: `All users deleted successfully!`});
        } else {
            next( new EntityNotFoundError(id) );
        }
    
    }

}

export default UsersRoute; 