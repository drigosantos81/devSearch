const express = require('express');

const app = express();

app.use(express.json());

// Métodos HTTP: get, post, put, delete

// Tipos de parâmetros: 
// Query Params: req.query (Filtros, ordenação, paginação...)
// Routs Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Dev!' });
});

app.listen(3333);