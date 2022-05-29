import express from 'express';
import { Response, Request } from 'express';
import Game from '../../../domain/entities/Game';
import gameCRUDService from '../../../domain/services/gamecrud';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
  console.log(req.body);

  var createdGame = await gameCRUDService.create(
    new Game(undefined, req.body.name, req.body.publishedAt, req.body.genre)
  );

  res.send({
    name: createdGame.name,
    publishedAt: createdGame.publishedAt,
    genre: createdGame.genre
  });
})

export default router;