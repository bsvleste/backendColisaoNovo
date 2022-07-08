import { Router } from 'express';
import { CreateScoreboardController } from '../modules/scoreboard/useCase/createScoreboard/CreateScoreboardController';
import { ListByIdScoreboardController } from '../modules/scoreboard/useCase/listByIdScoreboard/ListByIdScoreboardController';
import { ListScoreboardController } from '../modules/scoreboard/useCase/listScoreboard/ListScoreboardController';
import { UpdateScoreboardController } from '../modules/scoreboard/useCase/updateScoreboard/UpdateScoreboardController';
export const scoreBoardRoutes = Router();

const createScoreboardController = new CreateScoreboardController();
const listScoreboardController = new ListScoreboardController();
const updateScoreboardController = new UpdateScoreboardController();
const listByIdScoreboardController = new ListByIdScoreboardController();
scoreBoardRoutes.post('/',createScoreboardController.handle);
scoreBoardRoutes.get('/',listScoreboardController.handle);
scoreBoardRoutes.get('/:id',listByIdScoreboardController.handle);
scoreBoardRoutes.patch('/:id',updateScoreboardController.handle);
