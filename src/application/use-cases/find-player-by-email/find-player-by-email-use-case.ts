import { IPlayerRespository } from "../../repositories/i-player-repository";

export class FindPlayerByEmailUseCase {
  constructor(
    private playerRepository: IPlayerRespository
  ) { }
  execute(email: string) {
    this.playerRepository.findByEmail(email)
  }
}