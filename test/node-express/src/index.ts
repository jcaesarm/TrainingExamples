// Reads enviroment variables
import 'dotenv/config';

import Server from './server';
import UsersRoute from "./routes/users.route";
import UsersService from "./services/users.service";
import User from './models/user.entity';

// Create routes
const userRoute = new UsersRoute().register(`/api/users`, new UsersService(User));

// Initialize server
const server = new Server( 
    [
        userRoute
    ]
);

// Run server
server.listen( );