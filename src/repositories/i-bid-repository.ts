import { Player } from "../model/Player";

export interface IBidRepository {
  findByEmail(email: string): Player
}