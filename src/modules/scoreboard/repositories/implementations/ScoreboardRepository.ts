import { connectionMongoDb } from '../../../../database/datasource';
import { Scoreboard } from '../../entity/Scoreboard';
import {
  ICreateScoreboardDTO,
  IScoreboardRepository,
} from '../IScoreboardRepository';

export class ScoreboardRepository implements IScoreboardRepository {
  private scoreboardes 
  private static INSTANCE: ScoreboardRepository;
  constructor() {
    this.scoreboardes = connectionMongoDb.getMongoRepository(Scoreboard)
  }
  /* public static getInstace(): ScoreboardRepository {
    if (!ScoreboardRepository.INSTANCE) {
      ScoreboardRepository.INSTANCE = new ScoreboardRepository();
    }
    return ScoreboardRepository.INSTANCE;
  } */
  async create({
    dataPartida,
    segundoQuadro,
    primeiroQuadro,
  }: ICreateScoreboardDTO): Promise<void> {
    const placar = this.scoreboardes.create({
      dataPartida,
      segundoQuadro,
      primeiroQuadro,
    })
     await this.scoreboardes.save(placar) 
  }
  async list(): Promise<Scoreboard[]> {
    const listScoreboards = await this.scoreboardes.find();
    return listScoreboards
  }
 async findByData(dataPartida: string): Promise<Scoreboard> {
    const findDataPartida = await this.scoreboardes.findOneBy({dataPartida})
    return findDataPartida;
  }
}
