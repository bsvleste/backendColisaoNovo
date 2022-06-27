import { Scoreboard } from '../model/Scoreboard';
import {
  ICreateScoreboardDTO,
  IScoreboardRepository,
} from './IScoreboardRepository';

export class ScoreboardRepository implements IScoreboardRepository {
  private scoreboardes: Scoreboard[];
  private static INSTANCE: ScoreboardRepository;
  private constructor() {
    this.scoreboardes = [];
  }
  public static getInstace(): ScoreboardRepository {
    if (!ScoreboardRepository.INSTANCE) {
      ScoreboardRepository.INSTANCE = new ScoreboardRepository();
    }
    return ScoreboardRepository.INSTANCE;
  }
  create({
    dataPartida,
    segundoQuadro,
    primeiroQuadro,
  }: ICreateScoreboardDTO): void {
    const placar = new Scoreboard();
    Object.assign(placar, {
      dataPartida,
      segundoQuadro,
      primeiroQuadro,
    });
    this.scoreboardes.push(placar);
  }
  list(): Scoreboard[] {
    return this.scoreboardes;
  }
  findByData(data: string): Scoreboard {
    const findDataPartida = this.scoreboardes.find(
      (findDataPartida) => findDataPartida.dataPartida === data
    );
    return findDataPartida;
  }
}
