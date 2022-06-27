import { Placar } from '../model/Placar';
import { ICreatePlacarDTO, IPlacarRepository } from './IPlacarRepository';

export class PlacarRepository implements IPlacarRepository {
  private placares: Placar[];
  private static INSTANCE: PlacarRepository;
  private constructor() {
    this.placares = [];
  }
  public static getInstace(): PlacarRepository {
    if (!PlacarRepository.INSTANCE) {
      PlacarRepository.INSTANCE = new PlacarRepository();
    }
    return PlacarRepository.INSTANCE;
  }
  create({
    dataPartida,
    segundoQuadro,
    primeiroQuadro,
  }: ICreatePlacarDTO): void {
    const placar = new Placar();
    Object.assign(placar, {
      dataPartida,
      segundoQuadro,
      primeiroQuadro,
    });
    this.placares.push(placar);
  }
  list(): Placar[] {
    return this.placares;
  }
  findByData(data: string): Placar {
    const findDataPartida = this.placares.find(
      (findDataPartida) => findDataPartida.dataPartida === data
    );
    return findDataPartida;
  }
}
