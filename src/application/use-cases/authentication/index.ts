import { PlayerRepository } from "../../repositories/in-memory-repository/player-repository";
import { RefreshTokenRepository } from "../../repositories/in-memory-repository/refresh-token-repository";
import { AuthenticationController } from "./authentication-controller";
import { AuthenticationUseCase } from "./authentication-use-case";

const playerRespositor = PlayerRepository.getInstance()
const refreshToken = RefreshTokenRepository.getInstance()
const authenticationUseCase = new AuthenticationUseCase(playerRespositor, refreshToken)
const authenticationController = new AuthenticationController(authenticationUseCase)

export { authenticationController }