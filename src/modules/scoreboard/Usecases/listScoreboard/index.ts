import { ScoreboardRepository } from '../../repositories/ScoreboardRepository';
import { ListScoreboardController } from './ListScoreboardController';
import { ListScoreboardUseCase } from './ListScoreboardUseCase';
const scoreboardRepository = ScoreboardRepository.getInstace();
const listScoreboardUseCase = new ListScoreboardUseCase(scoreboardRepository);
const listScoreboardController = new ListScoreboardController(
  listScoreboardUseCase
);
export { listScoreboardController };
