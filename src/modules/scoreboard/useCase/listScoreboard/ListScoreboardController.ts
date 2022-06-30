import { ListScoreboardUseCase } from './ListScoreboardUseCase';
import { Request, Response } from 'express';

export class ListScoreboardController {
  constructor(private listScoreboard: ListScoreboardUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const listScoreboards = await this.listScoreboard.execute();
    return res.status(201).json(listScoreboards);
  }
}
