import { Scoreboard } from '../../model/Scoreboard';
import { IScoreboardRepository } from './../../repositories/IScoreboardRepository';

export class ListScoreboardUseCase {
  constructor(private ScoreboardRepository: IScoreboardRepository) {}
  execute(): Scoreboard[] {
    const scoreboardes = this.ScoreboardRepository.list();
    return scoreboardes;
  }
}
