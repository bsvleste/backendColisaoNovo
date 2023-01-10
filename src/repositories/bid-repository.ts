import { Player } from "../model/Player";
import { IBidRepository } from "./i-bid-repository";


export class BidRepository implements IBidRepository {

  findByEmail(email: string): Player {
    throw new Error("Method not implemented.");
  }

}