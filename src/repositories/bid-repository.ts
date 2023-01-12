import { randomUUID } from "crypto";
import { AppError } from "../error/AppError";
import { Bid } from "../model/Bid";
import { Message } from "../model/Message";
import { BidPropsDTO, IBidRepository } from "./i-bid-repository";
import { ScoreboardRepository } from "./scoreboard-repository";


export class BidRepository implements IBidRepository {

  private bids: Bid[]
  private static INSTANCE: BidRepository
  private constructor() {
    this.bids = []
  }
  public static getInstance(): BidRepository {
    if (!BidRepository.INSTANCE) {
      BidRepository.INSTANCE = new BidRepository();
    }
    return BidRepository.INSTANCE
  }
  createMessageStatus(): void {

    const data = {
      id: randomUUID(),
      playerId: randomUUID(),
      status: true,
      createdAt: new Date()
    }

    const bidByDate = this.bids.find(bid => bid.status === true)
    bidByDate.messages.push(data)
  }
  editStatusBid(status: boolean, bidDate: string): void {
    const bidByDate = this.bids.find(bid => bid.bidDate === bidDate)
    bidByDate.status = status
  }
  findByIdPlayer(idPlayer: any) {
    const bidByDate = this.bids.find(bid => bid.status === true)
    const player = bidByDate.messages.find(id => id.playerId === idPlayer)
    player.status = false
    console.log(player)
  }
  findBidByDate(bidDate: string) {
    const bidByDate = this.bids.find(bid => bid.bidDate === bidDate)
    return bidByDate
  }

  list(): Bid[] {
    return this.bids
  }
  findByStatus(): Bid[] {
    const findBid = this.bids.filter(bid => bid.status === true)
    return findBid
  }
  create({ bidDate }: BidPropsDTO): void {
    // const dateAllReadExists = this.findByByDate(bidDate)
    // console.log(dateAllReadExists)
    // if (dateAllReadExists) {
    //   return
    // }
    const createBid = new Bid();
    Object.assign(createBid, {
      bidDate
    })
    this.bids.push(createBid)
  }
}