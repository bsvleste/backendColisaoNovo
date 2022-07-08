import { injectable,inject } from 'tsyringe';
import { Scoreboard } from '../../entity/Scoreboard';
import { IScoreboardRepository } from './../../repositories/IScoreboardRepository';
interface IRequest{
  id:string
}
@injectable()
export class ListByIdScoreboardUseCase {
  constructor(
    @inject("ScoreboardRepository")
    private scoreboardRepository: IScoreboardRepository) {}
    async execute({id}:IRequest): Promise<Scoreboard> {
    const scoreboardes = await this.scoreboardRepository.findById(id);
    
    return scoreboardes;
  }
  
}
