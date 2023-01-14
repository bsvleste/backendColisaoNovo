import { Scoreboard } from "../../entities/Scoreboard";
import { ScoreboardRepository } from "../../repositories/in-memory-repository/scoreboard-repository";
export class ListScoreboardUseCase {
  constructor(
    private scoreboardRepository: ScoreboardRepository
  ) { }
  execute(): Scoreboard[] {
    return this.scoreboardRepository.list()
  }
}