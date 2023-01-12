import { Request, Response } from "express";
import { CreatePlayerUseCase } from "../create-player/create-player-use-case";
import { CreateBidUseCase } from "./create-bid-use-case";

export class CreateBidController {
  constructor(
    private createBidUseCase: CreateBidUseCase
  ) { }
  handle(req: Request, res: Response): Response {
    const { bidDate } = req.body
    this.createBidUseCase.execute(bidDate)
    return res.status(200).json({ msg: "Bid criado com sucesso" })
  }
}