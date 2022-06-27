import { ListScoreboardUseCase } from './ListScoreboardUseCase';
import { Request, Response } from 'express';

export class ListScoreboardController {
  constructor(private listScoreboard: ListScoreboardUseCase) {}
  handle(req: Request, res: Response): Response {
    return res.status(201).json(this.listScoreboard.execute());
  }
}
