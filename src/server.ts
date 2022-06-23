import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ messsage: 'Hello word' }));
app.listen(3333, () => console.log('Servidor HTTP online❤'));
