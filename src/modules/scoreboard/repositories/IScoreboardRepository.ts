import { Scoreboard } from './../entity/Scoreboard';
export interface ICreateScoreboardDTO {
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
export interface IScoreboardRepository {
  findByData(dataPartida: string): Promise<Scoreboard>;
  findById(id: string): Promise<Scoreboard>;
  list(): Promise<Scoreboard[]>;
  update({
    id,
    dataPartida,
    segundoQuadro,
    primeiroQuadro,
  }: ICreateScoreboardDTO): Promise<void>;
  create({
    dataPartida,
    segundoQuadro,
    primeiroQuadro,
  }: ICreateScoreboardDTO): Promise<void>;  
}
