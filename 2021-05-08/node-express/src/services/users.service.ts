import { getRepository } from "typeorm";

import { handleAsync } from "../shared/utilities";
import { Service } from "./index.service";

class UsersService extends Service{

    find = async( ) => {

        let [items, error] = await handleAsync(getRepository(this.entity).find( {relations: ["address", "company"]} ));

        if (error) throw error;
        return items;
    }

    findOne = async( id: string ) => {

        let [item, error] = await handleAsync(getRepository(this.entity).findOne( id, {relations: ["address", "company"]} ));

        if ( error ) throw error;
        return item  
    }

    update = async( id: string, data:any ) => {

        const modData = { id: Number(id), ...data};

        let [item, error] = await handleAsync(getRepository(this.entity).save(modData));
        // let [response, error] = await handleAsync(getRepository(this.entity).update(id, data));
        if ( error ) throw error;

        let [updatedItem, error2] = await handleAsync(getRepository(this.entity).findOne(id, {relations: ["address", "company"]}));
        if ( error2 ) return new Error(error2.message);

        return updatedItem;

    }
}

export default UsersService;