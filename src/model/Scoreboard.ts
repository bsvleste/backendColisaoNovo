import {v4 as uuidV4} from 'uuid'

export class Scoreboard{
	id?:string
	dataPartida:string
	segundoQuadro:{
        segundoColisao:string,
        segundoAdversario:string
    }
	primeiroQuadro:{
        primeiroColisao:string,
        primeiroAdversario:string
    }
	createAt?:Date

	constructor(){
		if(!this.id){
			this.id = uuidV4(),
			this.createAt = new Date()
		}
	}
}