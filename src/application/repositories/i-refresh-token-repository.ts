import { IPlayerRefreshTokenDTO } from "../dtos/i-player-refresh-token-dto";
import { RefreshToken } from "../entities/RefreshTokens";

export interface IRefreshTokenRespository {
  create({ playerId, expiresDate, refreshToken }: IPlayerRefreshTokenDTO): RefreshToken
  findPlayerByIdAndRefreshToken(playerId: string): RefreshToken
  deletePlayeId(id: string): Promise<void>
}