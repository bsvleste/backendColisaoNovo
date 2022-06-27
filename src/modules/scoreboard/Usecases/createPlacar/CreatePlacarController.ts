import { Request, Response } from 'express';
import { CreatePlacarUseCase } from './CreatePlacarUseCase';

export class CreatePlacarController {
  constructor(private createPlacarUseCase: CreatePlacarUseCase) {}
  handle(req: Request, res: Response): Response {
    const { dataPartida, segundoQuadro, primeiroQuadro } = req.body;
    this.createPlacarUseCase.execute({
      dataPartida,
      segundoQuadro,
      primeiroQuadro,
    });
    return res.status(201).send('Criado com sucesso');
  }
}
