import { AppError } from "../../error/AppError";
import { BidPropsDTO, IBidRepository } from "../../repositories/i-bid-repository";

export class CreateBidUseCase {

  constructor(
    private bidRepository: IBidRepository
  ) {

  }
  execute(bidDate: string): void {
    const bidAllReadyExistis = this.bidRepository.findBidByDate(bidDate)
    if (bidAllReadyExistis) {
      throw new AppError("Bid Bid com esta data ja existe")
    }
    this.bidRepository.create({ bidDate })
  }
}