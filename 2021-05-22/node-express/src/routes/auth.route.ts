import { Request, Response, NextFunction} from 'express';
var nJwt = require('njwt');

import { IService } from '../services/index.service';
import { IRoute, Route } from './index.route';
import { handleAsync } from '../shared/utilities';
import { validationMiddleware } from '../middleware/validation.middleware';
import { AuthUserValidator} from '../models/users.validator';

class AuthRoute extends Route{

    register = ( api: string, service: IService ): IRoute => {

        this.api = api;
        this.service = service;

        this.router.post(`/`,validationMiddleware(AuthUserValidator), this.post);
        return this;
    }

    protected post = async( request: Request, response:Response, next:NextFunction ) => {

        const data = request.body;

        let [items, error] = await handleAsync(this.service.find( data ));
        
        if (error) return next( error );

        if (items.length){
            //User is authenticated
            //Create a jwt token & SEND IT ALOING WITH THE RESPONESE
            const payload = items[0].id;
            const scope = `todo, users`;
            const claims = { iss: `ejAmerica.com`, sub: payload, scope: scope};
            const token = nJwt.create(claims, `yyy`);
            token.setExpiration(new Date().getTime() + 60*2000);

            //apend token to items
            items.push({token: token.compact()});

        }
        
        response.json(items);
    }
}

export default AuthRoute; 