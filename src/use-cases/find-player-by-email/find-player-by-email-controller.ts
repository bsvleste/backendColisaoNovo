import { FindPlayerByEmailUseCase } from "./find-player-by-email-use-case";

export class FindPlayerByController {

  constructor(
    private findPlayerByEmailUseCase: FindPlayerByEmailUseCase
  ) { }
  handle(req: Request, res: Response) {

    // const listAll = this.findPlayerByEmailUseCase.execute();
    // return res.status(200).json(listAll)
  }
}