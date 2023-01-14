import { Router } from "express";
import { authenticationController } from "../../application/use-cases/authentication";

const authenticationRouters = Router()

authenticationRouters.post('/', async (req, res) => {
  return authenticationController.handle(req, res)
})
export { authenticationRouters }