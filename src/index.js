require('dotenv').config();
const express = require('express');

const knightRouter = require('./routes/knightRouter.js');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/knight', knightRouter);

app.listen(PORT, () => {

    console.log(`Aplicação iniciada na porta ${PORT}`)

});
