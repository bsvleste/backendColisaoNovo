import { Scoreboard } from '../../entity/Scoreboard';
import { IScoreboardRepository } from './../../repositories/IScoreboardRepository';

export class ListScoreboardUseCase {
  constructor(private ScoreboardRepository: IScoreboardRepository) {}
  async execute(): Promise<Scoreboard[]> {
    const scoreboardes = await this.ScoreboardRepository.list();
    return scoreboardes;
  }
}
