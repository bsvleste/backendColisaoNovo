import express from 'express';
import { scoreBoardRoutes } from './routes/scoreboard.routes';
const app = express();

app.use(express.json());
app.use('/scoreboards', scoreBoardRoutes);
app.listen(3333, () =>
  console.log(
    'Servidor HTTP online❤parei na aula Iniciando a API/04 - Continuação da aplicação/aula06'
  )
);
