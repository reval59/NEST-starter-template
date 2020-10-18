import {SwaggerOptions} from 'fastify-swagger';

const config = () => ({
  routePrefix:`${process.env.SWAGGER_ROUTE_PREFIX}`,
  swagger: {
    info: {
      title: `${process.env.APP_ID} APIs`,
      description: `testing ${process.env.APP_ID} APIs`,
      version: '0.1.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    // host: `${process.env.HOST}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    // tags: [
    //   { name: 'user', description: 'User related end-points' },
    // ],
    // definitions: {
    //   User: {
    //     type: 'object',
    //     required: ['id', 'email'],
    //     properties: {
    //       id: { type: 'string', format: 'uuid' },
    //       firstName: { type: 'string' },
    //       lastName: { type: 'string' },
    //       email: {type: 'string', format: 'email' },
    //     },
    //   },
    // },
    // securityDefinitions: {
    //   apiKey: {
    //     type: 'apiKey',
    //     name: 'apiKey',
    //     in: 'header',
    //   },
    // },
  },
  exposeRoute: true,
} as SwaggerOptions);
export default config;