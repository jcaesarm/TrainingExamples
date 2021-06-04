import { UPDATE_USERS, UPDATE_ERROR, DELETE_USERS, DELETE_ERROR} from '../actions/users';


const initialState = { 
    loading: true, 
    data: null, 
    error: null
};

// Users Reducer 
const usersReducer = ( state = initialState, action:any ) => {

    switch ( action.type ) {
        case UPDATE_USERS:
            return {loading: false, data: action.payload, error:null};
        case UPDATE_ERROR:
            return {loading: false, data:null, error:action.payload};
        case DELETE_USERS:
            return {loading: false, data: action.payload, error:null};
        case DELETE_ERROR:
            return {loading: false, data:null, error:action.payload};
    }

    return state;
}

export default usersReducer;