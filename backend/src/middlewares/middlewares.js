// #region CONFIGS
const express = require('express');
require('dotenv').config();
// #endregion CONFIGS


// #region UTILS
const { ApiResponse } = require('../models/ApiResponse.model');
// #endregion UTILS


// #region METHODS

/** Valida se a requisição possui corpo válido */
const validatePayload = (req, res, next) => {
  const returnModel = new ApiResponse();

  if (!req.body) {
    returnModel.error = true;
    returnModel.errorMessage = 'Corpo da requisição não encontrado!';
    returnModel.code = 403;

    return res.status(403).send(returnModel);
  }

  return next();
};

/** Inicializa a estrutura de retorno padronizada */
const initializeReturnModel = (req, res, next) => {
  req.returnModel = new ApiResponse();
  next();
};

// #endregion METHODS


module.exports = {
  validatePayload,
  initializeReturnModel
};
