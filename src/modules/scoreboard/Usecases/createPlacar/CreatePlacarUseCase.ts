import { IPlacarRepository } from '../../repositories/IPlacarRepository';

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
export class CreatePlacarUseCase {
  constructor(private placarRepository: IPlacarRepository) {}
  execute({ dataPartida, segundoQuadro, primeiroQuadro }: IRequest): void {
    const placarAlreadyExists = this.placarRepository.findByData(dataPartida);
    if (placarAlreadyExists) {
      throw new Error('Placar ja Existe');
    }
    this.placarRepository.create({
      dataPartida,
      segundoQuadro,
      primeiroQuadro,
    });
  }
}
