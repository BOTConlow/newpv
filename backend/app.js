const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const { PrismaClient } = require('@prisma/client');

const app = express();

// Configuração do CORS
app.use(cors({ origin: 'https://www.protocolopeleperfeita.com.br' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do SendGrid com a chave da API
sgMail.setApiKey('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');

// Inicialização do Prisma Client
const prisma = new PrismaClient();

// Rota para receber os dados do formulário e enviar e-mail
app.post('/enviar-email', async (req, res) => {
  try {
    const { nome, email } = req.body;

     // Verifica se o e-mail já existe no banco de dados
     const user = await prisma.usuario.findUnique({ where: { email } });

     if (user) {
       // Se o e-mail já existir, retorna um erro informando que o usuário já está cadastrado
       return res.status(400);
     }

    const mailOptions = {
      from: 'protocolopeleperfeita@gmail.com',
      to: email,
      subject: 'Seu Cupom De Desconto',
      text: `Olá ${nome},\nAqui está seu cupom de desconto: FKDLKFI\n\nVocê pode usá-lo no seguinte link:\n\nhttps://pay.kiwify.com.br/UqOrZy4`,
    };

    await sgMail.send(mailOptions);
    console.log('E-mail enviado com sucesso!');


    // Inserção do usuário no banco de dados usando o Prisma Client
    await prisma.usuario.create({
      data: {
        nome,
        email,
      },
    });
    console.log('Usuário inserido no banco de dados com sucesso!');

    res.status(200).json({ message: 'E-mail enviado e usuário inserido com sucesso!' });
  } catch (error) {
    console.error('Erro no servidor:', error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

