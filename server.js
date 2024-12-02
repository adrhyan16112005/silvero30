require('dotenv').config(); 
const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  database: process.env.DB_NAME || 'BANCO_DE_DADOS',
  password: process.env.DB_PASSWORD || 'sua_senha_segura',
  port: process.env.DB_PORT || 5432,
});


app.use(express.static(path.join(__dirname)));


app.get('/api/alunos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM aluno');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar dados');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


