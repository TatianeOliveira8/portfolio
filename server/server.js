const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve os arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, '..', 'public')));

// Para qualquer rota, envia o index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
