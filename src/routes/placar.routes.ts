import { Router } from 'express';
import { createPlacarController } from '../modules/scoreboard/Usecases/createPlacar/';
import { listScoreboardController } from '../modules/scoreboard/Usecases/listScoreboard/';
export const placarRoutes = Router();

placarRoutes.post('/', (req, res) => {
  return createPlacarController.handle(req, res);
});

placarRoutes.get('/', (req, res) => {
  return res.status(201).json(listScoreboardController.handle(req, res));
});
