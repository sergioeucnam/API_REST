const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'REST API test',
            version: '1.0.0',
            description: 'Simple rest api with http request'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: ['./routes/*.js']
}
module.exports = options;