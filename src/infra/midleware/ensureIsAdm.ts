import { NextFunction, Request, Response } from "express";
import { PlayerRepository } from "../../application/repositories/in-memory-repository/player-repository";
import { AppError } from "../../error/AppError";

export async function ensureIsAdmin(req: Request, res: Response, next: NextFunction) {
  const { id } = req.player
  const usersRepository = PlayerRepository.getInstance()
  const user = usersRepository.findById(id)
  console.log(user)
  if (!user.isAdm) {
    throw new AppError("User isn't admin")
  }
  return next();
}