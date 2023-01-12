import { AppError } from "../../error/AppError";
import { Player } from "../../model/Player";
import { IPlayerDTO, IPlayerRespository } from "../../repositories/i-player-repository";

export class CreatePlayerUseCase {

  constructor(
    private playerRespository: IPlayerRespository
  ) { }
  execute({ email, name, password, position }: IPlayerDTO): void {
    const playerAllreadExists = this.playerRespository.findByEmail(email)
    if (playerAllreadExists) {
      console.log(playerAllreadExists)
    }
    this.playerRespository.create({
      name, email, password, position
    })
  }
}