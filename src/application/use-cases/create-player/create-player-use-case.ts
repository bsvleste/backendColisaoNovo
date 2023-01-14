
import { AppError } from "../../../error/AppError";
import { IPlayerDTO, IPlayerRespository } from "../../repositories/i-player-repository";

export class CreatePlayerUseCase {

  constructor(
    private playerRespository: IPlayerRespository
  ) { }
  execute({ email, name, password, position, isAdm }: IPlayerDTO): void {
    const playerAllreadExists = this.playerRespository.findByEmail(email)
    if (playerAllreadExists) {
      throw new AppError("Usuario ja cadastrado tente outro email", 401)
    }
    this.playerRespository.create({
      name, email, password, position, isAdm
    })
  }
}