import express from 'express';
import cors from 'cors';  // importa o cors
// import mysql from 'mysql2';
import bodyParser from 'body-parser';
import dadosPessoaisRoutes from './routes/dadosPessoaisRoutes.js';
import projetoRoutes from './routes/projetoRoutes.js';
import certificadoRoutes from './routes/certificadoRoutes.js';
import tecnologiaRoutes from './routes/tecnologiaRoutes.js'; 

const app = express();
const PORT = 3000;
app.use(cors({ origin: 'http://localhost:3001' })); // libera só o front na porta 3001

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API rodando');
});

app.use('/api', projetoRoutes);
app.use('/api', certificadoRoutes);
app.use('/api', tecnologiaRoutes); 
app.use('/api', dadosPessoaisRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
