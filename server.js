require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  database: process.env.DB_NAME || 'BANCO',  
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
});


app.use(express.static(path.join(__dirname)));


app.get('/api/alunos', async (req, res) => {
  try {
   
    const result = await pool.query('SELECT * FROM public.aluno');
    res.json(result.rows); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar dados' });  
  }
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
