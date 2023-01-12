import { randomUUID } from "crypto"
import { Message } from "./Message"

export class Bid {
  id?: string
  bidDate: string
  messages?: any[]
  status?: boolean

  constructor() {
    if (!this.id) {
      this.id = randomUUID()
      this.status = true
      this.messages = []
    }
  }
}