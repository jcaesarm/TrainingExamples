import express from 'express';

import IRoute from './index.route';

class UsersRoute implements IRoute{

    api = `/ss`;
    router = express.Router();
}

export default UsersRoute;