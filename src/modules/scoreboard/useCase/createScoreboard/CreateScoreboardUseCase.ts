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
export class CreateScoreboardUseCase {
  constructor(private ScoreboardRepository: IScoreboardRepository) {}
  execute({ dataPartida, segundoQuadro, primeiroQuadro }: IRequest): void {
    const ScoreboardAlreadyExists =
      this.ScoreboardRepository.findByData(dataPartida);
    if (ScoreboardAlreadyExists) {
      throw new Error('Scoreboard ja Existe');
    }
    this.ScoreboardRepository.create({
      dataPartida,
      segundoQuadro,
      primeiroQuadro,
    });
  }
}
