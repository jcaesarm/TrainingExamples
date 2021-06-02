export const UPDATE_USERS = `[users] Update Users`;
export const UPDATE_ERROR = `[users] Users Error`;
export const GET_USERS = `[users middleware] Get Users`;

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

export const getUsersAction = ( option: string ) => (
    {
        type: GET_USERS,
        payload: option
    }
);
