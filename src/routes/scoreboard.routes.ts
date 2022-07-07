import { Router } from 'express';
import { CreateScoreboardController } from '../modules/scoreboard/useCase/createScoreboard/CreateScoreboardController';
import { ListScoreboardController } from '../modules/scoreboard/useCase/listScoreboard/ListScoreboardController';
export const scoreBoardRoutes = Router();

const createScoreboardController = new CreateScoreboardController();
const listScoreboardController = new ListScoreboardController();
scoreBoardRoutes.post('/',createScoreboardController.handle);
scoreBoardRoutes.get('/',listScoreboardController.handle);
