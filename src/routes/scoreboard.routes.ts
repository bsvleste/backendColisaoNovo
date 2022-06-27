import { Router } from 'express';
import { createScoreboardController } from '../modules/scoreboard/Usecases/createScoreboard/';
import { listScoreboardController } from '../modules/scoreboard/Usecases/listScoreboard/';
export const scoreBoardRoutes = Router();

scoreBoardRoutes.post('/', (req, res) => {
  return createScoreboardController.handle(req, res);
});

scoreBoardRoutes.get('/', (req, res) => {
  const allScoreborads = listScoreboardController.handle(req, res);
  return res.status(201).json(allScoreborads);
});
