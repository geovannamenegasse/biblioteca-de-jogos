import express from 'express';
import { Response, Request } from 'express';
import Library from '../../../domain/entities/Library';
import libraryCRUDService from '../../../domain/services/librarycrud';
import gameCRUDService from '../../../domain/services/gamecrud';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
                                              // parseInt(req.body.userId);
  var createdLibrary = await libraryCRUDService.create(
    new Library(undefined, req.body.userId, req.body.gameId)
  );

  res.send(createdLibrary);
});

router.get('/getAllFrom', async (req: Request, res: Response) => {
  var allGames = await libraryCRUDService.getAllGamesFrom(req.body.userId);

  res.send(allGames);
});

// router.post('/insertGame', [checkJwt], async (req: Request, res: Response) => {
//     var insertedGame = await libraryCRUDService.insertGame(parseInt(req.body.gameId), parseInt(req.body.userId));
  
//     res.send(insertedGame);
// })

// router.get('/getAllGames', [checkJwt], async (req: Request, res: Response) => {
//     var allGames = await libraryCRUDService.getAllGames(parseInt(req.body.userId));
  
//     res.send(allGames);
// })

// router.get('/getOne/:id', [checkJwt], async (req: Request, res: Response) => {
//     console.log(req.body.id);
//     var library = await libraryCRUDService.getLibraryBy(parseInt(req.body.id));
  
//     res.send(library);
//   })

router.delete('/removeGame', async (req: Request, res: Response) => {
  var removedGame = await libraryCRUDService.removeGame(req.body.userId, req.body.gameId);
  res.send(removedGame);
});

export default router;