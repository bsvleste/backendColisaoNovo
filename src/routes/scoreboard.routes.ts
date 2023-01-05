import { Router } from 'express'
import { ScoreboardRepository } from '../repositories/scoreboard-repository'
import { CreateScoreboardService } from '../services/create-scoreboard-service'


const scoreboardRoutes =  Router()
const scoreboardRepository = new  ScoreboardRepository()

scoreboardRoutes.post('/', async(req,res)=>{
	const {dataPartida,segundoQuadro,primeiroQuadro} = req.body
	const createScoreboardService = new CreateScoreboardService(scoreboardRepository)
	createScoreboardService.execute({
		dataPartida,
		segundoQuadro,
		primeiroQuadro
	})
	return res.status(201).json({msg:'Data cadastrada com sucesso'})
})
scoreboardRoutes.get('/',async(req,res)=>{
	const listAllScoreboard =  scoreboardRepository.list()
	return res.status(201).json(listAllScoreboard)
})
export {scoreboardRoutes}