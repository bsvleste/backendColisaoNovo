import { ScoreboardRepository } from "../../repositories/scoreboard-repository"
import { ListScoreboardController } from "../list-scoreboard/list-scoreboard-controller"
import { ListScoreboardUseCase } from "../list-scoreboard/list-scoreboard-use-case"

const scoreboardRepository = ScoreboardRepository.getInstnce()
const listScoreboardUseCase = new ListScoreboardUseCase(scoreboardRepository)
const listScoreboardController = new ListScoreboardController(listScoreboardUseCase)
export { listScoreboardController }