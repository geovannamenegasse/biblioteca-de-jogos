import express from 'express';
import { Response, Request } from 'express';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.send("Example of http controller adapter in hexagonal architecture");
});

export default router;