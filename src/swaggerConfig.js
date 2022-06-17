const { getAll, getById, addPlayer } = require("./controllers/players.controllers");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'REST API test',
            version: '1.0.0',
            description: 'Simple rest api with http request'
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {


            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'server'
            }
        ],
        paths: {
            '/api/players': {
                get: getAll,
            },
            '/api/players/:id': {
                get: getById
            },
            '/players': {
                post: addPlayer
            }
        },
    },
    apis: ['./routes/players.js']
}
module.exports = options;