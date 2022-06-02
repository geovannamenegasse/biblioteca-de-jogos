import express from 'express';
import { Response, Request } from 'express';
import Game from '../../../domain/entities/Game';
import gameCRUDService from '../../../domain/services/gamecrud';
import { checkJwt } from '../middlewares/authentication/checkJwt';

const router = express.Router();

router.get('/getOne/:id', [checkJwt], async (req: Request, res: Response) => {
  console.log(req.params.id);
  var game = await gameCRUDService.getGameBy(parseInt(req.params.id));

  res.send(game);
})

router.get('/getOneByName/:name', [checkJwt], async (req: Request, res: Response) => {
  console.log(req.params.name);
  var game = await gameCRUDService.getGameByName(req.params.name);
  
  res.send(game);
})

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

router.get('/getAll', async (req: Request, res: Response) => {
  var allGames = await gameCRUDService.getAll();

  res.send(allGames);
})

export default router;