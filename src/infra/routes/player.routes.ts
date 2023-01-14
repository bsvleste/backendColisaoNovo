import { Router } from "express";
import { PlayerRepository } from "../../application/repositories/in-memory-repository/player-repository";
import { CreatePlayerController } from "../../application/use-cases/create-player/create-player-controller";
import { CreatePlayerUseCase } from "../../application/use-cases/create-player/create-player-use-case";
import { ListPlayersController } from "../../application/use-cases/list-players/list-players-controller";
import { ListPlayersUseCase } from "../../application/use-cases/list-players/list-players-use-case";

const playerRouters = Router()
const playerRepository = PlayerRepository.getInstance()
const createPlayerUseCase = new CreatePlayerUseCase(playerRepository)
const createPlayerController = new CreatePlayerController(createPlayerUseCase)
const listPlayerUseCase = new ListPlayersUseCase(playerRepository)
const listPlayerController = new ListPlayersController(listPlayerUseCase)

playerRouters.get("/", async (req, res) => {
  return listPlayerController.handle(req, res)
})
playerRouters.post('/', async (req, res) => {
  return createPlayerController.handle(req, res)
})
export { playerRouters }