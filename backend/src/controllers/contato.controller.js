// #region CONFIGS
const express = require('express');
const router = express.Router();

const nodemailer = require("nodemailer");
const nodemailerSendgrid = require('nodemailer-sendgrid');

const { validatePayload, initializeReturnModel } = require('../middlewares/middlewares');

require('dotenv').config();
// #endregion CONFIGS


// #region UTILS
const { ApiResponse } = require('../models/ApiResponse.model');
// #endregion UTILS


// #region ENDPOINTS

// #region GET      isso aqui funciona
router.get('/get', async (req, res) => {
  const returnModel = req.returnModel;
  
  try {
    returnModel.code = 200;
    return res.status(200).json(returnModel);
  }
  catch (err) {
    returnModel.error = true;
    returnModel.errorMessage = `Ocorreu um erro ao enviar o formulário: ${err}`;
    returnModel.code = 500;

    return res.status(500).json(returnModel);
  }
});
// #endregion GET

// #region POST     isso aqui não
router.post('/send', validatePayload, async (req, res) => {
  const returnModel = req.returnModel;
  const contatoFormModel = req.body;
  
  // Validação de campos
  if (!contatoFormModel.nome || !contatoFormModel.sobrenome || !contatoFormModel.email || !contatoFormModel.descricao) {
    returnModel.error = true;
    returnModel.errorMessage = 'Todos os campos são obrigatórios!';
    returnModel.code = 400;

    return res.status(400).json(returnModel);
  }
  
  try {
    // Configuração do transporte (SMTP do Gmail)
    let transporter = nodemailer.createTransport(
      nodemailerSendgrid({ apiKey: process.env.SENDGRID_API_KEY })
    );

    // Configurar o e-mail
    let mailOptions = {
      from: process.env.SENDGRID_FROM,
      to: process.env.SENDGRID_TO,

      templateId: process.env.SENDGRID_TEMPLATEID,
      dynamicTemplateData: {
        first_sender_name: contatoFormModel.nome,
        last_sender_name: contatoFormModel.sobrenome,
        reply_to: contatoFormModel.email,
        necessities: contatoFormModel.necessidades.length > 0 ? contatoFormModel.necessidades.join(', ') : "Nenhum",
        contact_description: contatoFormModel.descricao
      },
    };

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);

    returnModel.error = false;
    returnModel.code = 200;
    
    return res.status(200).json(returnModel);
  }
  catch (err) {
    returnModel.error = true;
    returnModel.errorMessage = `Ocorreu um erro ao enviar o formulário: ${err}`;
    returnModel.code = 500;

    return res.status(500).json(returnModel);
  }
});
// #endregion POST

// #region PUT
// [...]
// #endregion PUT

// #region DELETE
// [...]
// #endregion DELETE

// #endregion ENDPOINTS


module.exports = router;
