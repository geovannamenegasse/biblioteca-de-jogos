import dotenv from 'dotenv';

dotenv.config();

import express, { Express, Request, Response } from 'express';
import ExampleHttpController from './controllers/http/ExampleController';
import sequelize from './dataSources/sequelize';
import UserRepository from './domain/repositories/UserRepository';
import Client from './domain/entities/Client';
import User from './domain/entities/User';
import UserDataSource from './dataSources/sequelize/UserDataSource';
import ClientCreationController from './controllers/http/client/ClientCreationController';

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
  // var newClient = new Client(5, "cliente Vitor", new User(23, "login Vitor", "123456"));
  // userRepository.insert(newClient).then(
  //   (insertedClient) => {
  //     console.log(insertedClient);
  //   },
  //   (reason) => console.log(reason)
  // );

  // var existingClient = new Client(13, "Vitor Atualizado final", new User(24, "login atualizado final", "666 atualizado final"));
  // userRepository.update(existingClient).then(
  //   (updatedClient) => {
  //     console.log(updatedClient);
  //   },
  //   (reason) => console.log(reason)
  // );

  res.send(`Express + TypeScript Server with mooooore TypeScripts hexagonal`);
});

app.use('/example', ExampleHttpController);
app.use('/client', ClientCreationController);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});