import { injectable,inject } from 'tsyringe';
import { Scoreboard } from '../../entity/Scoreboard';
import { IScoreboardRepository } from './../../repositories/IScoreboardRepository';
interface IRequest {
  id?:string,
  dataPartida: string;
  segundoQuadro: {
    segundoColisao: string;
    segundoAdversario: string;
  };
  primeiroQuadro: {
    primeiroColisao: string;
    primeiroAdversario: string;
  };
}
@injectable()
export class UpdateScoreboardUseCase {
  constructor(
    
    @inject("ScoreboardRepository")
    private scoreboardRepository: IScoreboardRepository) {}
  async execute({id,dataPartida,segundoQuadro,primeiroQuadro}:IRequest): Promise<void> {
    await this.scoreboardRepository.update({id,dataPartida,segundoQuadro,primeiroQuadro})    
  }  
}
