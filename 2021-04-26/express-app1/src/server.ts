import express from 'express';

const server = express( );
const port = 3000;

// loggin middleware
server.use( (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next( );
});



server.get('/', (req, res) => {
  res.send('Hello World From Express!');
});
server.get('/info', (req, res) => {
    res.send('Info From Express!');
  });

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
