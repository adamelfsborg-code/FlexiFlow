import express, { Request, Response } from 'express';
import http from 'http';
import socketIo from 'socket.io';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';

import routes from './routes';
import { initializeEventBus } from './EventBus';

/*** ENV ***/ 
dotenv.config()
const ENV = process.env
const PORT = ENV.PORT || 3000;
/*** ENV ***/ 

const app = express();
const server = http.createServer(app);
const io = new socketIo.Server(server);

initializeEventBus(io);

/*** MIDDLEWARES ***/ 
app.use(bodyParser.json());
/*** MIDDLEWARES ***/ 

/*** ROUTES ***/ 
app.use('/', routes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, FlexiFlow!');
});
/*** ROUTES ***/ 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});