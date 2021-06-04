import { Middleware, MiddlewareAPI, Dispatch, AnyAction} from 'redux';

import axios from '../../axios';
import { GET_USERS, DELETE_USERS, updateUsersAction, deleteErrorAction, updateErrorAction} from '../actions/users';
// import { GET_USERS, DELETE_USERS, updateUsersAction, deleteUsersAction, deleteErrorAction, updateErrorAction} from '../actions/users';

export const getUsersMiddleware: Middleware = ( api: MiddlewareAPI ) => (next: Dispatch<AnyAction>) => (action: any) => {

    next( action );

    if ( action.type === GET_USERS ){

        const URL = action.payload ? `/api/users?name=${action.payload}` : `/api/users`;
        console.log(action.payload)
        axios.get( URL )
            .then(response => {
                const users: any[] = response.data;
                const modUsers = users.map( (user: any) => {
                    return {ID: user.id ,Name: user.name, Email: user.email, Website: user.website, City: user.address.city, Street: user.address.street};
                });
                api.dispatch(updateUsersAction(modUsers));
            })
            .catch(error =>  api.dispatch(updateErrorAction(error)))
    }
    
    if ( action.type === DELETE_USERS ){
        const URL = action.payload ? `/api/users/${action.payload}` : `/api/users`;
        console.log(action.payload)
        axios.delete( URL,{data:action.payload} )
        .then(response => {
            // const users: any[] = response.data;
            // const modUsers2 = users.map( (user: any) => {
            //     return {ID: user.id, Name: user.name, Email: user.email, Website: user.website, City: user.address.city, Street: user.address.street};
            // });
            // api.dispatch(deleteUsersAction(modUsers2));
        })
        .catch(error =>  api.dispatch(deleteErrorAction(error)))
    }

}

export const usersMdl = [getUsersMiddleware];