import { hashSync } from "bcrypt";
import { Player } from "../model/Player";
import { IPlayerDTO, IPlayerRespository } from "./i-player-repository";

export class PlayerRepository implements IPlayerRespository {
  private players: Player[]
  private static INTANCE: PlayerRepository
  private constructor() {
    this.players = []
  }
  public static getInstance(): PlayerRepository {
    if (!PlayerRepository.INTANCE) {
      PlayerRepository.INTANCE = new PlayerRepository()
    }
    return PlayerRepository.INTANCE
  }
  findByEmail(email: string): Player {
    const playerAllreadyExists = this.players.find(player => player.email === email)
    return playerAllreadyExists
  }
  list(): Player[] {
    return this.players
  }

  create({ name, email, password, position }: IPlayerDTO): void {
    const createPlayer = new Player()
    const salt = 10
    const hash = hashSync(password, salt)

    Object.assign(createPlayer, {
      name,
      email,
      password: hash,
      position
    })
    this.players.push(createPlayer)
  }
}