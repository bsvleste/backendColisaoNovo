import { Request, Response } from "express";
import { ListPlayersUseCase } from "./list-players-use-case";

export class ListPlayersController {
  constructor(
    private listPlayerUseCase: ListPlayersUseCase
  ) { }
  handle(req: Request, res: Response): Response {
    const listAll = this.listPlayerUseCase.execute();
    return res.status(200).json(listAll)
  }
}