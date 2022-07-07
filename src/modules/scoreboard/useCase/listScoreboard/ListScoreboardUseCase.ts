import { injectable,inject } from 'tsyringe';
import { Scoreboard } from '../../entity/Scoreboard';
import { IScoreboardRepository } from './../../repositories/IScoreboardRepository';

@injectable()
export class ListScoreboardUseCase {
  constructor(
    @inject("ScoreboardRepository")
    private scoreboardRepository: IScoreboardRepository) {}
  async execute(): Promise<Scoreboard[]> {
    const scoreboardes = await this.scoreboardRepository.list();
    return scoreboardes;
  }
  
}
