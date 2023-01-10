import { Router } from 'express'
import { ScoreboardRepository } from '../repositories/scoreboard-repository'
import { CreateScoreboardController } from '../use-cases/create-scoreboard/create-scoreboard-controller'
import { CreateScoreboardUseCase } from '../use-cases/create-scoreboard/create-scoreboard-use-case'
import { ListScoreboardController } from '../use-cases/list-scoreboard/list-scoreboard-controller'
import { ListScoreboardUseCase } from '../use-cases/list-scoreboard/list-scoreboard-use-case'


const scoreboardRoutes = Router()
const scoreboardRepository = new ScoreboardRepository()
const createScoreboardUseCase = new CreateScoreboardUseCase(scoreboardRepository)
const createScoreboardController = new CreateScoreboardController(createScoreboardUseCase)
const listScoreboardUseCase = new ListScoreboardUseCase(scoreboardRepository)
const listScoreboardController = new ListScoreboardController(listScoreboardUseCase)

scoreboardRoutes.post('/', async (req, res) => {
	return createScoreboardController.handle(req, res)
})
scoreboardRoutes.get('/', async (req, res) => {
	return listScoreboardController.handle(req, res)
})
export { scoreboardRoutes }