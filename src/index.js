const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;

//swagger
const swaggerUi = require('swagger-ui-express');
const options = require('./swaggerConfig.js');
const swaggerJSDoc = require('swagger-jsdoc');
const specs = swaggerJSDoc(options)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use(require('./routes/index.js'))
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs))
app.use('/api/players', require('./routes/players.js'))

//server deployment
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})