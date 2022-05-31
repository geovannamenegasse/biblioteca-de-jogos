import express from 'express';
import { Response, Request } from 'express';
import Client from '../../../domain/entities/Client';
import User from '../../../domain/entities/User';
import clientCRUDService from '../../../domain/services/clientcrud';
import { checkJwt } from '../middlewares/authentication/checkJwt';

const router = express.Router();

router.post('/create', [checkJwt], async (req: Request, res: Response) => {
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