const express = require ('express');
const cors = require ('cors');
const routes = require ('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar informação no back-end
 * POST: Criar informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query: Parâmetros nomeados para enviados apos '?' (Filtros, paginação)
  * Rout: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
  */
app.listen(3333);