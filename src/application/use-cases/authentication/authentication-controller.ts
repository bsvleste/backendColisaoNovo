import { Request, Response } from "express";
import { AuthenticationUseCase } from "./authentication-use-case";


export class AuthenticationController {
  constructor(
    private authenticationUseCase: AuthenticationUseCase
  ) { }
  handle(req: Request, res: Response): Response {
    const { email, password } = req.body
    const authentication = this.authenticationUseCase.execute({ email, password })
    return res.status(200).json(authentication)
  }
}