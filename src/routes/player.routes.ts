import { Router } from "express";
import { listenerCount } from "process";
import { PlayerRepository } from "../repositories/player-repository";
import { CreatePlayerController } from "../use-cases/create-player/create-player-controller";
import { CreatePlayerUseCase } from "../use-cases/create-player/create-player-use-case";
import { ListPlayersController } from "../use-cases/list-players/list-players-controller";
import { ListPlayersUseCase } from "../use-cases/list-players/list-players-use-case";

const playerRouters = Router()
const playerRepository = new PlayerRepository()
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