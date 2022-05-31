import express from 'express';
import { Response, Request } from 'express';
import loginService from '../../../domain/services/login';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    res.send({
      token: await loginService.login(req.body.login, req.body.password)
    });
  } catch (error) {
    console.log("Error happened during login");
    console.log(error);
  }
})

export default router;