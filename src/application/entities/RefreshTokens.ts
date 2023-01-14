import { randomUUID } from "crypto"
import { Player } from "./Player"

export class RefreshToken {
  id: string
  playerId: string
  player: Player
  refreshToken: string
  expiresDate: Date
  createdAt: Date

  constructor() {
    if (!this.id) {
      this.id = randomUUID()
    }
  }
}