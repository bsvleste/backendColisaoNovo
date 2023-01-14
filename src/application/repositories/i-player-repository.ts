import { Player } from "../entities/Player";


export interface IPlayerDTO {
  name: string
  email: string
  password: string
  position: string
  isAdm: boolean
}
export interface IPlayerRespository {
  create({ name, email, password, position, isAdm }: IPlayerDTO): void
  list(): Player[]
  findByEmail(email: string): Player
  findById(id: string): Player
}