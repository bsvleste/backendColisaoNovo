import {container} from 'tsyringe';
import { ScoreboardRepository } from '../../modules/scoreboard/repositories/implementations/ScoreboardRepository';
import { IScoreboardRepository } from '../../modules/scoreboard/repositories/IScoreboardRepository';

container.registerSingleton<IScoreboardRepository>(
  "ScoreboardRepository",
  ScoreboardRepository
)