// server/server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta 'public' localizada na raiz do projeto
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rota para acessar a página do currículo
app.get('/curriculo', (req, res) => {
  // Caminho absoluto para o arquivo HTML que renderiza o React
  const filePath = path.join(__dirname, '..', 'public', 'curriculo.html');
  
  // Envia o arquivo HTML
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send('Erro ao enviar o arquivo.');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
