import dotenv from 'dotenv';

dotenv.config();

import express, { Express, Request, Response } from 'express';
import ExampleHttpController from './controllers/http/ExampleController';
import sequelize from './dataSources/sequelize';
import UserDataSource from './dataSources/sequelize/UserDataSource';
import User from './domain/entities/User';
import UserRepository from './domain/repositories/UserRepository';

const app: Express = express();

const userRepository: UserRepository = new UserDataSource();

sequelize.sync({alter: false}).then((sequelize) => {
  console.log("database connected");
},
(reason) =>{
  console.log(reason);
});


const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  userRepository.insert(new User(10, "vitor", "1234")).then(
    () => {
      console.log("insert sucessful");
    },
    (reason) => {
      console.log(reason);
    }
  );

  res.send(`Express + TypeScript Server with mooooore TypeScripts hexagonal`);
});

app.use('/example', ExampleHttpController);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});