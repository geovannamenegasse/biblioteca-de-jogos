import express from 'express';
import { Response, Request } from 'express';
import Game from '../../../domain/entities/Game';
import gameCRUDService from '../../../domain/services/gamecrud';
import { checkJwt } from '../middlewares/authentication/checkJwt';

const router = express.Router();

router.post('/create', [checkJwt], async (req: Request, res: Response) => {
  var createdGame = await gameCRUDService.create(
    new Game(undefined, req.body.name, req.body.publishedAt, req.body.genre)
  );

  res.send({
    name: createdGame.name,
    publishedAt: createdGame.publishedAt,
    genre: createdGame.genre
  });
})

router.get('/getAll', [checkJwt], async (req: Request, res: Response) => {
  var allGames = await gameCRUDService.getAll();

  res.json(allGames);
})

export default router;