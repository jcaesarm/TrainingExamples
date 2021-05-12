// Reads enviroment variables
import 'dotenv/config';

import Server from './server';
import { Route } from "./routes/index.route";
import { Service } from "./services/index.service";
import Post from './models/post.entity';
import Todo from './models/todo.entity';
import Company from './models/company.entity';

// Create routes
const postRoute = new Route().register('/posts', new Service(Post));
const todoRoute = new Route().register('/todos', new Service(Todo));
const companyRoute = new Route().register('/company', new Service(Company));

// Initialize server
const server = new Server( 
    [
        postRoute,
        todoRoute, 
        companyRoute
    ]
);

// Run server
server.listen( );