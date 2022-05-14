import dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response } from 'express';
import ExampleHttpController from './controllers/http/ExampleController';
import sequelize from './dataSources/sequelize'

const app: Express = express();


sequelize.sync().then((sequelize) => {
  console.log(sequelize);
},
(reason) =>{
  console.log(reason);
});


const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server with mooooore TypeScripts hexagonal');
});

app.use('/example', ExampleHttpController);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});