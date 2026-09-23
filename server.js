const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();

const user = process.env.AUTH_USER || 'btg';
const pass = process.env.AUTH_PASS || 'btg2026';

app.use(basicAuth({
  users: { [user]: pass },
  challenge: true,
  realm: 'BTG Proposta SFPS'
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
