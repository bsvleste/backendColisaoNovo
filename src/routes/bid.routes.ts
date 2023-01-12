import { Router } from "express";
import { BidRepository } from "../repositories/bid-repository";
import { createBidController } from "../use-cases/create-bid";

const bidRouters = Router()


bidRouters.post('/', async (req, res) => {
  return createBidController.handle(req, res)
})
bidRouters.get('/', async (req, res) => {
  const findBid = BidRepository.getInstance().list()
  return res.status(201).json(findBid)
})
bidRouters.get("/status", async (req, res) => {
  const findByStatus = BidRepository.getInstance().list()
  const bidStatus = findByStatus.filter(bid => bid.status === false)
  return res.status(200).json(bidStatus)
})
bidRouters.put('/updateBid/:bidDate', async (req, res) => {
  const { bidDate } = req.params
  BidRepository.getInstance().editStatusBid(false, bidDate)
  return res.status(201).json({ msg: "alterado com sucesso" })
})
bidRouters.post('/playeranwsers', async (req, res) => {
  BidRepository.getInstance().createMessageStatus()
  return res.status(200).json({ meg: 'ok' })
})
bidRouters.get("/playerBid/:idPlayer", async (req, res) => {

  BidRepository.getInstance().findByIdPlayer(req.params.idPlayer)
  return res.status(200).json({ ok: true })
})
export { bidRouters }