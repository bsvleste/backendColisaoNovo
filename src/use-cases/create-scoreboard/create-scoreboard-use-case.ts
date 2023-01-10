import { IScoreboardRepository } from "../../repositories/i-scoreboard-repository"

interface ICreateScoreboardService {
  dataPartida: string
  segundoQuadro: {
    segundoColisao: string,
    segundoAdversario: string
  }
  primeiroQuadro: {
    primeiroColisao: string,
    primeiroAdversario: string
  }

}
export class CreateScoreboardUseCase {
  constructor(private scoreboardRepository: IScoreboardRepository) {

  }
  execute({ dataPartida, segundoQuadro, primeiroQuadro }: ICreateScoreboardService): void {
    const scoreboardAlReadyExists = this.scoreboardRepository.findByDate(dataPartida)
    if (scoreboardAlReadyExists) {
      throw new Error('Data ja existe')
    }
    this.scoreboardRepository.create({ dataPartida, segundoQuadro, primeiroQuadro })
  }
}