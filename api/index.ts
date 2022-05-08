import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import ExampleHttpController from './controllers/http/ExampleController';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server with mooooore TypeScripts hexagonal');
});

app.use('/example', ExampleHttpController);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});