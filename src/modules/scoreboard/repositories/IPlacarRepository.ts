import { Placar } from './../model/Placar';
export interface ICreatePlacarDTO {
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
export interface IPlacarRepository {
  findByData(dataPartida: string): Placar;
  list(): Placar[];
  create({
    dataPartida,
    segundoQuadro,
    primeiroQuadro,
  }: ICreatePlacarDTO): void;
}
