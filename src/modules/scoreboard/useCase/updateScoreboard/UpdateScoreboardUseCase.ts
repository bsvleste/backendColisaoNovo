import { throws } from 'assert';
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
  findById?:Scoreboard
}
@injectable()
export class UpdateScoreboardUseCase {
  constructor(
    
    @inject("ScoreboardRepository")
    private scoreboardRepository: IScoreboardRepository) {}
    async execute({id,dataPartida,segundoQuadro,primeiroQuadro,findById}:IRequest): Promise<void> {
      const findScoreBoardId = await this.scoreboardRepository.findById(id)
      if(!findScoreBoardId){
        throw new Error("Partida não encontrada")
      }
      await this.scoreboardRepository.update({id,dataPartida,segundoQuadro,primeiroQuadro})    
  }  
}