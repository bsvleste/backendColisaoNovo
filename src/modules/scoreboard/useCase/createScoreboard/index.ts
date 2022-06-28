import { ScoreboardRepository } from '../../repositories/implementations/ScoreboardRepository';
import { CreateScoreboardController } from './CreateScoreboardController';
import { CreateScoreboardUseCase } from './CreateScoreboardUseCase';

const scoreboardRepository = ScoreboardRepository.getInstace();
const createScoreboardUseCase = new CreateScoreboardUseCase(
  scoreboardRepository
);

const createScoreboardController = new CreateScoreboardController(
  createScoreboardUseCase
);
export { createScoreboardController };
