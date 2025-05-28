import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import dadosPessoaisRoutes from './routes/dadosPessoaisRoutes.js';
import projetoRoutes from './routes/projetoRoutes.js';
import certificadoRoutes from './routes/certificadoRoutes.js';
import tecnologiaRoutes from './routes/tecnologiaRoutes.js'; // importou as rotas de tecnologia

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API rodando');
});

// Rotas de projetos
app.use('/api', projetoRoutes);

// Rotas de certificados
app.use('/api', certificadoRoutes);

// Rotas de tecnologias
app.use('/api', tecnologiaRoutes); // registrou as rotas de tecnologia

// Rotas de dados pessoais
app.use('/', dadosPessoaisRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
