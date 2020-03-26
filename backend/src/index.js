const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);


/**
*MÉTODOS HTTP:
*GET: buscar/listar informação do back-end
*POST: criar informação no back-end
*PUT: quando queremos alterar informação no back-end
*DELETE: utilizado para delear algo no backend
*/

/**
*TIPOS DE PARÂMETROS:
*Query Params: parâmetros nomeados enviados na rota após o simbolo de "?" (filtros,paginação)"""acessa através de .query"""
*Route Params: parâmetros utilizados para identificar recursos """acessa através de .params"""
*Request Body: Corpo da requisição, utilizado para criar ou alterar recursos. atraves de .body
*/

/**
 * SQL: MySLQ, SQLite, PostgreSQL, Oracle, Microsoft SLQ Server
 * NoSQL: MongoDB, CouchDB, etc.
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */



app.listen(3333);