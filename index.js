const app = require('./server');

const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
