import { scoreboardRoutes } from './scoreboard.routes'
import {Router} from 'express'
export const router = Router()

router.use('/scoreboard',scoreboardRoutes)