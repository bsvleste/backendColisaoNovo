import { ListScoreboardUseCase } from './ListScoreboardUseCase';
import { ScoreboardRepository } from '../../repositories/ScoreboardRepository';
import { ListScoreboardController } from './ListScoreboardController';

const scoreboardRepository = ScoreboardRepository.getInstace();
const listScoreboardUseCase = new ListScoreboardUseCase(scoreboardRepository);
const listScoreboardController = new ListScoreboardController(
  listScoreboardUseCase
);
export { listScoreboardController };
