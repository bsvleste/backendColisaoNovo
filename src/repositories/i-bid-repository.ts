import { Bid } from "../model/Bid";

export interface BidPropsDTO {
  bidDate: string
}
export interface IBidRepository {
  create({ bidDate }: BidPropsDTO): void
  findByStatus(): Bid[]
  list(): Bid[]
  findBidByDate(bidDate: string): Bid
  editStatusBid(status: boolean, bidDate: string): void
  createMessageStatus(): void
  findByIdPlayer(playerId: string): void
}