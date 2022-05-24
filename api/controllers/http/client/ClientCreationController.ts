import express from 'express';
import { Response, Request } from 'express';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
  res.send("Route to create a new client");
});

export default router;