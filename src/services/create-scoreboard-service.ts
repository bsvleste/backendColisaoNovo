import { AppError } from '../error/AppError'
import { IScoreboardRepository } from '../repositories/i-scoreboard-repository'

interface ICreateScoreboardService{
    dataPartida:string
	segundoQuadro:{
        segundoColisao:string,
        segundoAdversario:string
    }
	primeiroQuadro:{
        primeiroColisao:string,
        primeiroAdversario:string
    }
	
}
export class CreateScoreboardService{
	constructor(private scoreboardRepository:IScoreboardRepository){

	}
	execute({dataPartida,segundoQuadro,primeiroQuadro}:ICreateScoreboardService):void{
		const scoreboardAlReadyExists = this.scoreboardRepository.findByDate(dataPartida)
		if(scoreboardAlReadyExists){
			throw new AppError('Data ja existe')
            
		}	
		this.scoreboardRepository.create({dataPartida,segundoQuadro,primeiroQuadro})		
	}
}