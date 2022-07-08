import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateScoreboardUseCase } from './UpdateScoreboardUseCase';

export class UpdateScoreboardController {
  
  async handle(req: Request, res: Response): Promise<Response> {
    const updateScoreboard = container.resolve(UpdateScoreboardUseCase)
    const id = req.params.id
    const { dataPartida, segundoQuadro, primeiroQuadro } = req.body;
    await updateScoreboard.execute({
      id,
      dataPartida,
      segundoQuadro,
      primeiroQuadro
        });    
    return res.status(201).send("alterado com sucesso");
  }
}
