import { Router } from 'express'
import { createScoreboardController } from '../../application/use-cases/create-scoreboard'
import { listScoreboardController } from '../../application/use-cases/list-players'
import { ensureAuthenticated } from '../midleware/ensureAuthenticated'
import { ensureIsAdmin } from '../midleware/ensureIsAdm'

const scoreboardRoutes = Router()
scoreboardRoutes.post('/', async (req, res) => {
	return createScoreboardController.handle(req, res)
})
scoreboardRoutes.get('/', ensureAuthenticated, ensureIsAdmin, async (req, res) => {
	return listScoreboardController.handle(req, res)
})
export { scoreboardRoutes }
