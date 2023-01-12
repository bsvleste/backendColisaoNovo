import { Router } from 'express'
import { ScoreboardRepository } from '../repositories/scoreboard-repository'
import { createScoreboardController } from '../use-cases/create-scoreboard'
import { listScoreboardController } from '../use-cases/list-players'

const scoreboardRoutes = Router()
scoreboardRoutes.post('/', async (req, res) => {
	return createScoreboardController.handle(req, res)
})
scoreboardRoutes.get('/', async (req, res) => {
	return listScoreboardController.handle(req, res)
})
export { scoreboardRoutes }