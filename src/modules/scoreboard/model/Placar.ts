import { v4 as uuidv4 } from 'uuid';

export class Placar {
  id?: string;
  dataPartida: string;
  segundoQuadro: {
    segundoColisao: Number;
    segundoAdversario: Number;
  };
  primeiroQuadro: {
    primeiroColisao: Number;
    primeiroAdversario: Number;
  };
  create_at?: Date;
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
