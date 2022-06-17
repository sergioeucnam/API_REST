const express = require('express');
const app = express();
const morgan = require('morgan');
// const router = require('./routes');
const PORT = 3000;

//swagger
const swaggerUi = require('swagger-ui-express');
// const swaggerJsDoc = require('swagger-jsdoc');
const options = require('./swaggerConfig');
const swaggerJSDoc = require('swagger-jsdoc');
const specs = swaggerJSDoc(options)
//middlewares
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use(require('./routes/index.js'))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))
app.use('/api/players', require('./routes/players.js'))
app.use('/api/users', require('../src/routes/placeholders.js'))

//server deployment
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})