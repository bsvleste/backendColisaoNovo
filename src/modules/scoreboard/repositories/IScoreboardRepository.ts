import { Scoreboard } from './../entity/Scoreboard';
export interface ICreateScoreboardDTO {
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
export interface IScoreboardRepository {
  findByData(dataPartida: string): Promise<Scoreboard>;
  list(): Promise<Scoreboard[]>;
  create({
    dataPartida,
    segundoQuadro,
    primeiroQuadro,
  }: ICreateScoreboardDTO): Promise<void>;
}
