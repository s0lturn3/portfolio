// #region CONFIGS
const express = require('express');
const cors = require('cors');

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = express();


// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Habilita o CORS
app.use(cors({
  origin: [ 'http://localhost:4200' ], // URLs permitidas
  methods: [ 'OPTIONS', 'GET', 'POST', 'PUT', 'DELETE' ],
  allowedHeaders: [ 'Accept', 'Content-Type' ]
}));
// #endregion CONFIGS


// #region UTILS

// Middleware global
const { initializeReturnModel } = require('./middlewares/middlewares');
app.use(initializeReturnModel);

const { validatePayload } = require('./middlewares/middlewares');
const { ApiResponse } = require('./models/ApiResponse.model');

// #endregion UTILS


// #region ENDPOINTS

const contatoRoutes = require('./controllers/contato.controller');
app.use('/api/contato', contatoRoutes);

// #endregion ENDPOINTS


// Inicializando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
