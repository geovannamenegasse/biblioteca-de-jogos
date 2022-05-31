import dotenv from 'dotenv';

dotenv.config();

import express, { Express, Request, Response } from 'express';
import ExampleHttpController from './controllers/http/ExampleController';
import sequelize from './dataSources/sequelize';
import ClientCreationController from './controllers/http/client/ClientCreationController';
import cors from 'cors';
import helmet from 'helmet'
import UserAuthenticationController from './controllers/http/user/UserAuthenticationController'

const app: Express = express();

sequelize.sync({alter: false}).then((sequelize) => {
  console.log("database connected");
},
(reason) =>{
  console.log(reason);
});


const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send(`Express + TypeScript Server with mooooore TypeScripts hexagonal`);
});

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/example', ExampleHttpController);
app.use('/api/client', ClientCreationController);
app.use('/api/user', UserAuthenticationController);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});