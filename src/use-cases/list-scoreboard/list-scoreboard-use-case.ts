import { Scoreboard } from "../../model/Scoreboard";
import { ScoreboardRepository } from "../../repositories/scoreboard-repository";

export class ListScoreboardUseCase {
  constructor(
    private scoreboardRepository: ScoreboardRepository
  ) { }
  execute(): Scoreboard[] {
    return this.scoreboardRepository.list()
  }
}