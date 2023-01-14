import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { RefreshTokenRepository } from "../../application/repositories/in-memory-repository/refresh-token-repository";
import auth from "../../config/auth";
import { AppError } from "../../error/AppError";
interface IPlayload {
  sub: string
}
export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const playerRefreshTokenRepository = RefreshTokenRepository.getInstance();
  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }
  const [, token] = authHeader.split(" ");
  try {
    const { sub: playerId } = verify(
      token,
      auth.secret_refresh_token) as IPlayload
    const player = playerRefreshTokenRepository.findPlayerByIdAndRefreshToken(playerId)

    if (!player) {
      throw new AppError("User does not exists", 401)
    }
    req.player = {
      id: playerId
    }
    next();
  } catch {
    throw new AppError(`Invalid token`, 401)
  }
  return
}