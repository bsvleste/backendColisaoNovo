import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByIdScoreboardUseCase } from './ListByIdScoreboardUseCase';

export class ListByIdScoreboardController {
  
  async handle(req: Request, res: Response): Promise<Response> {
    const listScoreboardUseCase = container.resolve(ListByIdScoreboardUseCase)
    const {id} = req.params;   
    const listScoreboards = await listScoreboardUseCase.execute({id});
    return res.status(201).json(listScoreboards);
  }
}
