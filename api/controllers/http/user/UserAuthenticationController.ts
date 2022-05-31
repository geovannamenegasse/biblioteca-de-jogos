import express from 'express';
import { Response, Request } from 'express';
import loginService from '../../../domain/services/login';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
  console.log(req.body);

  res.send({
    token: await loginService.login(req.body.login, req.body.password)
  });
})

export default router;