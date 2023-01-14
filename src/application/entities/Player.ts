import { randomUUID } from "crypto"
export class Player {

  id?: string
  name: string
  password: string
  email: string
  isAdm?: boolean
  permissions?: []
  roles?: []
  position: string
  passwordResetToken?: string
  passwordResetExpires?: Date
  createdAt?: Date
  constructor() {
    if (!this.id) {
      this.id = randomUUID()
      this.isAdm = false
    }
  }

}