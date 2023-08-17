// src/app.ts
import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';

/*** ENV ***/ 
dotenv.config()
const ENV = process.env
const PORT = ENV.PORT || 3000;
/*** ENV ***/ 

const app = express();

/*** MIDDLEWARES ***/ 
app.use(bodyParser.json());
/*** MIDDLEWARES ***/ 

app.get('/', (req, res) => {
  res.send('Hello, FlexiFlow!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});