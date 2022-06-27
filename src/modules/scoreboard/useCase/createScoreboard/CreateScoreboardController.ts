import { Request, Response } from 'express';
import { CreateScoreboardUseCase } from './CreateScoreboardUseCase';

export class CreateScoreboardController {
  constructor(private createScoreboardUseCase: CreateScoreboardUseCase) {}
  handle(req: Request, res: Response): Response {
    const { dataPartida, segundoQuadro, primeiroQuadro } = req.body;
    this.createScoreboardUseCase.execute({
      dataPartida,
      segundoQuadro,
      primeiroQuadro,
    });
    return res.status(201).send('Criado com sucesso');
  }
}
