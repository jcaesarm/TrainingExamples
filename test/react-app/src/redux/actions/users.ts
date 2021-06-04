export const UPDATE_USERS = `[users] Update Users`;
export const UPDATE_ERROR = `[users] Users Error`;
export const DELETE_ERROR = `[users] Users Error`;
export const GET_USERS = `[users middleware] Get Users`;
export const DELETE_USERS = `[users middleware] Delete Users`;

export const updateUsersAction = ( users: any ) => (
    {
        type: UPDATE_USERS,
        payload: users
    }
);

export const updateErrorAction = ( error: any ) => (
    {
        type: UPDATE_ERROR,
        payload: error
    }
);

export const deleteErrorAction = ( error: any ) => (
    {
        type: DELETE_ERROR,
        payload: error
    }
);

export const getUsersAction = ( option: string ) => (
    {
        type: GET_USERS,
        payload: option
    }
);

export const deleteUsersAction = ( option: string ) => (
    {
        type: DELETE_USERS,
        payload: option
    }
);


