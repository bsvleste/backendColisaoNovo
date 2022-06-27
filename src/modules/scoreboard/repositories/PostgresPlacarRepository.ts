import { Placar } from '../model/Placar';
import { ICreatePlacarDTO, IPlacarRepository } from './IPlacarRepository';

export class PostgresPlacarRepository implements IPlacarRepository {
  findByData(dataPartida: string): Placar {
    console.log(dataPartida);
    return null;
  }
  list(): Placar[] {
    return null;
  }
  create({
    dataPartida,
    segundoQuadro,
    primeiroQuadro,
  }: ICreatePlacarDTO): void {
    console.log(`${dataPartida}, ${segundoQuadro}, ${primeiroQuadro}`);
  }
}
