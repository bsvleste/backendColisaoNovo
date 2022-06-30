import { ScoreboardRepository } from '../../repositories/implementations/ScoreboardRepository';
import { CreateScoreboardController } from './CreateScoreboardController';
import { CreateScoreboardUseCase } from './CreateScoreboardUseCase';
export default():CreateScoreboardController=>{

  const scoreboardRepository  = new  ScoreboardRepository();
  const createScoreboardUseCase = new CreateScoreboardUseCase(
    scoreboardRepository
    );
    
    const createScoreboardController = new CreateScoreboardController(
      createScoreboardUseCase
      );
      return  createScoreboardController ;
    }
      