import { Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('scoreboards')
export class Scoreboard {
  @ObjectIdColumn()
  id: string;

  @Column()
  dataPartida: string;

  @Column()
  segundoQuadro: {
    segundoColisao: Number;
    segundoAdversario: Number;
  };

  @Column()
  primeiroQuadro: {
    primeiroColisao: Number;
    primeiroAdversario: Number;
  };
  @CreateDateColumn()
  createAt: Date
  /* constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  } */
  
}
