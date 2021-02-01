import express from 'express';

import './database/connection';

const app= express();

app.use(express.json());

//metodos http: GET: buscar, POST: criando, PUT:editando, DELETE: deletando

//parametros: query, route, body

app.get('/users', (request, response) => {
  return response.json({message: 'Hello Word'});
});

app.listen(3333);
