import { scoreboardRoutes } from './scoreboard.routes'
import { Router } from 'express'
import { playerRouters } from './player.routes'
import { bidRouters } from './bid.routes'
export const router = Router()

router.use('/scoreboards', scoreboardRoutes)
router.use('/players', playerRouters)
router.use('/bids', bidRouters)