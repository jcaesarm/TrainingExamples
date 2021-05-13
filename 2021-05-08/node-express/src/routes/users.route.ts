import { Request, Response, NextFunction} from 'express';

import { handleAsync } from '../shared/utilities';
import { IService } from '../services/index.service';
import { IRoute, Route } from './index.route';

class UsersRoute extends Route{

    register = ( api: string, service: IService ): IRoute => {

        this.api = api;
        this.service = service;

        this.router.post('/', this.post);
        this.router.get('/', this.get);
        this.router.get('/:id', this.getOne);
        this.router.patch('/:id', this.patch);
        this.router.delete('/:id', this.delete);
        return this;
    }

    protected get = async( request: Request, response:Response, next:NextFunction ) => {

        let searchOption = request.query.search;
        console.log(`UserRoute get method : `, searchOption);

        let [items, error] = await handleAsync(this.service.find());

        if (error) return response.send(error);
        response.send(items);
    }

    protected delete = async( request: Request, response:Response, next:NextFunction ) => {

        const id = request.params.id;
    
        let [deleteResponse, error] = await handleAsync(this.service.delete(id));

        if (error) return response.send(error);
        if (deleteResponse.affected === 1){
            response.send({deleted: true, message: `All users deleted successfully!`});
        } else {
            response.send(`No item found for ${id}!`);
        }
    
    }

}

export default UsersRoute; 