import { Request, Response } from "express";
import { ListPlayersUseCase } from "../list-players/list-players-use-case";
import { ListScoreboardUseCase } from "./list-scoreboard-use-case";

export class ListScoreboardController {
  constructor(
    private listScoreboardUseCase: ListScoreboardUseCase
  ) { }
  handle(req: Request, res: Response): Response {
    const scoreboards = this.listScoreboardUseCase.execute();
    return res.status(200).json(scoreboards)
  }
}