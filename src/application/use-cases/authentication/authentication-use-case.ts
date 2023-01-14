import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import auth from "../../../config/auth";
import { AppError } from "../../../error/AppError";
import { IPlayerRespository } from "../../repositories/i-player-repository";
import { IRefreshTokenRespository } from "../../repositories/i-refresh-token-repository";

interface IRequest {
  email: string
  password: string
}
interface IResponse {
  player: {
    name: string,
    email: string
  },
  token: string,
  refreshToken: string
}
export class AuthenticationUseCase {

  constructor(
    private playerRespository: IPlayerRespository,
    private refreshToken: IRefreshTokenRespository,
  ) {
  }

  execute({ email, password }: IRequest): IResponse {
    const { expires_in_token, secret_token, secret_refresh_token, expires_in_refresh_token, expires_refresh_token_days } = auth
    const player = this.playerRespository.findByEmail(email)
    if (!player) {
      throw new AppError("Email or password incorret", 401)
    }
    const comparePassword = compare(player.password, password)
    if (!comparePassword) {
      throw new AppError("Email or password incorret", 401)
    }
    const token = sign({}, secret_token, {
      subject: player.id,
      expiresIn: expires_in_token
    })
    const refreshToken = sign({ email }, secret_refresh_token, {
      subject: player.id,
      expiresIn: expires_in_refresh_token
    })
    this.refreshToken.create({
      playerId: player.id,
      email,
      refreshToken,
      expiresDate: new Date('2023-02-10')
    })
    const tokenReturn: IResponse = {
      token,
      player: {
        name: player.name,
        email: player.email
      },
      refreshToken
    }
    return tokenReturn
  }
}