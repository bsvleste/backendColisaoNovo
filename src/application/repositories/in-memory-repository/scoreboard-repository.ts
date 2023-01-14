import { Scoreboard } from "../../entities/Scoreboard"
import { IScoreboardRepository } from "../i-scoreboard-repository"


interface ICreateScoreboardRepositoryPropsDTO {

	dataPartida: string
	segundoQuadro: {
		segundoColisao: string,
		segundoAdversario: string
	}
	primeiroQuadro: {
		primeiroColisao: string,
		primeiroAdversario: string
	}

}

export class ScoreboardRepository implements IScoreboardRepository {
	private scoreboards: Scoreboard[]
	private static INSTANCE: ScoreboardRepository
	private constructor() {
		this.scoreboards = []
	}
	public static getInstnce(): ScoreboardRepository {
		if (!ScoreboardRepository.INSTANCE) {
			ScoreboardRepository.INSTANCE = new ScoreboardRepository()
		}
		return ScoreboardRepository.INSTANCE
	}

	create({ dataPartida, segundoQuadro, primeiroQuadro }: ICreateScoreboardRepositoryPropsDTO): void {
		const scoreboard = new Scoreboard()
		Object.assign(scoreboard, {
			dataPartida,
			segundoQuadro,
			primeiroQuadro,
		})

		this.scoreboards.push(scoreboard)
	}
	list(): Scoreboard[] {
		return this.scoreboards
	}
	findByDate(dataPartida: string): Scoreboard {
		const scoreboard = this.scoreboards.find((data) => data.dataPartida === dataPartida)
		return scoreboard
	}
}