import { Player } from "../model/Player";


export interface IPlayerDTO {
  name: string
  email: string
  password: string
  position: string
}
export interface IPlayerRespository {
  create({ name, email, password, position }: IPlayerDTO): void
  list(): Player[]
  findByEmail(email: string): Player
}