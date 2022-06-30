import { ListScoreboardUseCase } from './ListScoreboardUseCase';
import { ScoreboardRepository } from '../../repositories/implementations/ScoreboardRepository';
import { ListScoreboardController } from './ListScoreboardController';

export default():ListScoreboardController =>{
  const scoreboardRepository = new ScoreboardRepository();
  const listScoreboardUseCase = new ListScoreboardUseCase(scoreboardRepository);
  const listScoreboardController = new ListScoreboardController(
    listScoreboardUseCase
    );
    return   listScoreboardController ;
  }
