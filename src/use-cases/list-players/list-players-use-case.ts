import { Player } from "../../model/Player";
import { IPlayerRespository } from "../../repositories/i-player-repository";


export class ListPlayersUseCase {
  constructor(
    private playerRepository: IPlayerRespository
  ) { }
  execute(): Player[] {
    return this.playerRepository.list()
  }
}