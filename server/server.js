// server/server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta 'public' localizada na raiz do projeto
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rota para acessar o PDF diretamente
app.get('/pdf/curriculum', (req, res) => {
  // Caminho absoluto para o arquivo curriculum.pdf
  const filePath = path.join(__dirname, '..', 'public', 'pdf', 'curriculum.pdf');
  
  // Envia o arquivo PDF
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send('Erro ao enviar o arquivo.');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
