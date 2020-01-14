const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:nirvanA10@cluster0-uuaaw.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

// Métodos HTTP: get, post, put, delete

// Tipos de parâmetros: 
// Query Params: req.query (Filtros, ordenação, paginação...)
// Routs Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Banco de dados Não-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Dev!' });
});

app.listen(3333);