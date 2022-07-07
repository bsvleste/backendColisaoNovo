import { injectable,inject } from 'tsyringe';
import { IScoreboardRepository } from '../../repositories/IScoreboardRepository';

interface IRequest {
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
export class CreateScoreboardUseCase {
  constructor(
    @inject("ScoreboardRepository")
    private scoreboardRepository: IScoreboardRepository) {}
 async execute({ dataPartida, segundoQuadro, primeiroQuadro }: IRequest): Promise<void> {
    const scoreboardAlreadyExists = await this.scoreboardRepository.findByData(dataPartida);
    if (scoreboardAlreadyExists) {
      throw new Error('Category already exists');
    }
    
    this.scoreboardRepository.create({
      dataPartida,
      segundoQuadro,
      primeiroQuadro,
    });
  }
}
