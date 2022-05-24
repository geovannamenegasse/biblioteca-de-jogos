import express from 'express';
import { Response, Request } from 'express';
import Client from '../../../domain/entities/Client';
import User from '../../../domain/entities/User';
import clientCRUDService from '../../../domain/services/clientcrud';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
  console.log(req.body);

  var createdClient = await clientCRUDService.create(
    new Client(undefined, req.body.name,
      new User(undefined, req.body.login, req.body.password)
    )
  );

  res.send({
    name: createdClient.name,
    login: createdClient.user.login,
    password: createdClient.user.hashedPassword
  });
})

export default router;