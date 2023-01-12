import { randomUUID } from "crypto"

export class Message {
  id?: string
  status: boolean
  playerId: string
  createdAt?: Date

  constructor() {
    if (!this.id) {
      this.id = randomUUID()
    }
  }
}