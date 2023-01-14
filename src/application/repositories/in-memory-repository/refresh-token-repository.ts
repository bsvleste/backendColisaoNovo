import { IPlayerRefreshTokenDTO } from "../../dtos/i-player-refresh-token-dto";
import { RefreshToken } from "../../entities/RefreshTokens";
import { IRefreshTokenRespository } from "../i-refresh-token-repository";

export class RefreshTokenRepository implements IRefreshTokenRespository {
  private refreshTokens: RefreshToken[]
  private static INSTANCE: RefreshTokenRepository

  private constructor() {
    this.refreshTokens = []
  }
  public static getInstance(): RefreshTokenRepository {
    if (!RefreshTokenRepository.INSTANCE) {
      RefreshTokenRepository.INSTANCE = new RefreshTokenRepository()
    }
    return RefreshTokenRepository.INSTANCE
  }
  create({ playerId, expiresDate, refreshToken }: IPlayerRefreshTokenDTO): RefreshToken {
    const token = new RefreshToken();
    Object.assign(token, {
      playerId,
      expiresDate,
      refreshToken
    })
    this.refreshTokens.push(token)
    return token
  }
  findPlayerByIdAndRefreshToken(playerId: string): RefreshToken {
    const findPlayerRefreshToken = this.refreshTokens.find(token => token.playerId === playerId)
    return findPlayerRefreshToken
  }
  deletePlayeId(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

}