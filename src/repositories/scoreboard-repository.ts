import { Scoreboard } from '../model/Scoreboard'
import { IScoreboardRepository } from './i-scoreboard-repository'

interface ICreateScoreboardRepositoryPropsDTO{
    
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

export class ScoreboardRepository implements IScoreboardRepository{
	private scoreboards:Scoreboard[]
    
	constructor(){
		this.scoreboards = []
	}
    
	create({dataPartida,segundoQuadro,primeiroQuadro}:ICreateScoreboardRepositoryPropsDTO):void{
		const scoreboard =  new  Scoreboard() 
		Object.assign(scoreboard,{
			dataPartida,
			segundoQuadro,
			primeiroQuadro,
		})
	
		this.scoreboards.push(scoreboard)
	} 
	list():Scoreboard[]{
		return this.scoreboards
	}
	findByDate(dataPartida:string):Scoreboard{
		const scoreboard = this.scoreboards.find((data)=> data.dataPartida === dataPartida) 
		return scoreboard		
	}
}