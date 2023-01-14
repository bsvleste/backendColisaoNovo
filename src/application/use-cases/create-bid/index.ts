import { BidRepository } from "../../repositories/in-memory-repository/bid-repository"
import { CreateBidController } from "./create-bid-controller"
import { CreateBidUseCase } from "./create-bid-use-case"

const bidRepository = BidRepository.getInstance()
const createBidUseCase = new CreateBidUseCase(bidRepository)
const createBidController = new CreateBidController(createBidUseCase)
export { createBidController }