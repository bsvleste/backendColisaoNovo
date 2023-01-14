import express, { NextFunction, Request, Response } from 'express'
import "express-async-errors"
import swaggerUI from 'swagger-ui-express'
import { AppError } from './error/AppError'
import { router } from './infra/routes'
import swaggerFile from './swagger.json'
const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use(router)
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
	if (error instanceof AppError) {
		return res.status(error.statusCode).json({
			message: error.message
		})
	}
	return res.status(500).json({
		status: 'error',
		message: `Internal server error - ${error.message}`
	})
}

)
export { app }