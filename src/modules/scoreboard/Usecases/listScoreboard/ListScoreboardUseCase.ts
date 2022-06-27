import { Placar } from '../../model/Placar';
import { IPlacarRepository } from '../../repositories/IPlacarRepository';

export class ListScoreboardUseCase {
  constructor(private placarRepository: IPlacarRepository) {}
  execute(): Placar[] {
    const scoreboardes = this.placarRepository.list();
    return scoreboardes;
  }
}
