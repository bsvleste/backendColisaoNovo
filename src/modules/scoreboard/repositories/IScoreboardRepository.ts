import { Scoreboard } from './../model/Scoreboard';
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
  findByData(dataPartida: string): Scoreboard;
  list(): Scoreboard[];
  create({
    dataPartida,
    segundoQuadro,
    primeiroQuadro,
  }: ICreateScoreboardDTO): void;
}
