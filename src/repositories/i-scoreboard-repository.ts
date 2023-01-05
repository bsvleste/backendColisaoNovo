import { Scoreboard } from '../model/Scoreboard'

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
export interface IScoreboardRepository{
    create({dataPartida,segundoQuadro,primeiroQuadro}:ICreateScoreboardRepositoryPropsDTO):void
    list():Scoreboard[]
    findByDate(dataPartida:string):Scoreboard
}   