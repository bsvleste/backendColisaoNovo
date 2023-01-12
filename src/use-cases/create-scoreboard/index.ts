import { ScoreboardRepository } from "../../repositories/scoreboard-repository"
import { CreateScoreboardController } from "./create-scoreboard-controller"
import { CreateScoreboardUseCase } from "./create-scoreboard-use-case"

const scoreboardRepository = ScoreboardRepository.getInstnce()
const createScoreboardUseCase = new CreateScoreboardUseCase(scoreboardRepository)
const createScoreboardController = new CreateScoreboardController(createScoreboardUseCase)
export { createScoreboardController }