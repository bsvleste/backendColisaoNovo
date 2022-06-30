import 'dotenv/config'
import express from 'express';
import { router } from './routes';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import mongoose from 'mongoose';
import { connectionMongoDb } from './database/datasource';
const app = express();

connectionMongoDb.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);
app.listen(3333, () =>
  console.log(
    'Servidor HTTP online❤parei na aula Capituo3/continuando aplaicação/trabalhando bd/'
  )
);
