import express from 'express';
import { placarRoutes } from './routes/placar.routes';
const app = express();

app.use(express.json());
app.use('/placares', placarRoutes);
app.listen(3333, () =>
  console.log(
    'Servidor HTTP online❤parei na aula Iniciando a API/04 - Continuação da aplicação/aula06'
  )
);
