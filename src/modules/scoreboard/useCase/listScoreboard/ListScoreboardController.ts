import { ListScoreboardUseCase } from './ListScoreboardUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class ListScoreboardController {
  
  async handle(req: Request, res: Response): Promise<Response> {
    const listScoreboardUseCase = container.resolve(ListScoreboardUseCase)
    const listScoreboards = await listScoreboardUseCase.execute();
    return res.status(201).json(listScoreboards);
  }
}
