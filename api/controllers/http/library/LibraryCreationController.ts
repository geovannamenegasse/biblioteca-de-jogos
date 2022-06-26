import express from 'express';
import { Response, Request } from 'express';
import Library from '../../../domain/entities/Library';
import libraryCRUDService from '../../../domain/services/librarycrud';
import { checkJwt } from '../middlewares/authentication/checkJwt';

const router = express.Router();

router.post('/create', [checkJwt], async (req: Request, res: Response) => {
  var createdLibrary = await libraryCRUDService.create(parseInt(req.params.userId));

  res.send({
    id: createdLibrary.id,
    user: createdLibrary.user,
    games: createdLibrary.games
  });
})

router.post('/insertGame', [checkJwt], async (req: Request, res: Response) => {
    var insertedGame = await libraryCRUDService.insertGame(parseInt(req.params.gameId), parseInt(req.params.userId));
  
    res.send(insertedGame);
})

router.get('/getAllGames', [checkJwt], async (req: Request, res: Response) => {
    var allGames = await libraryCRUDService.getAllGames(parseInt(req.params.userId));
  
    res.send(allGames);
})

router.get('/getOne/:id', [checkJwt], async (req: Request, res: Response) => {
    console.log(req.params.id);
    var library = await libraryCRUDService.getLibraryBy(parseInt(req.params.id));
  
    res.send(library);
  })

export default router;