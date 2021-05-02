import express from 'express';
import cors from 'cors';

import postsRouterv1 from './routes/posts';
// import postsRouterv2 from './routes/posts1';
import usersRouter from './routes/users';

const server = express( );
const port = 3500;

// Set cors headers
server.use(cors());

// loggin middleware
server.use( (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next( );
});

//register routers
server.use( '/posts', postsRouterv1);
server.use( '/users', usersRouter);

server.get('/', (req, res) => {
  res.send('Grettings!');
});

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
