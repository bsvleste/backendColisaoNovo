import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateScoreboardUseCase } from './CreateScoreboardUseCase';

export class CreateScoreboardController {
  
  async handle(req: Request, res: Response): Promise<Response> {
    const createScoreboardUseCase = container.resolve(CreateScoreboardUseCase)
    const { dataPartida, segundoQuadro, primeiroQuadro } = req.body;
    await createScoreboardUseCase.execute({
      dataPartida,
      segundoQuadro,
      primeiroQuadro,
    });
    return res.status(201).send('Criado com sucesso');
  }
}
