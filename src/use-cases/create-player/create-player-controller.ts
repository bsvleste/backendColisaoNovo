import { Request, Response } from "express";
import { PlayerRepository } from "../../repositories/player-repository";
import { CreatePlayerUseCase } from "./create-player-use-case";

export class CreatePlayerController {
  constructor(
    private createPlayerUseCase: CreatePlayerUseCase
  ) {

  }
  handle(req: Request, res: Response) {
    const { name, email, password, position } = req.body

    this.createPlayerUseCase.execute({
      name, email, password, position
    })
    return res.status(200).json({ msg: "cadastrado com sucesso" })
  }

}