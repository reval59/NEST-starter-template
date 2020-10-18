import fastify from 'fastify';
import dotenv from 'dotenv';
import {fastifySwagger} from 'fastify-swagger';
import router from './router';
import swaggerConfig from './swagger.config';

const envPath = `${__dirname}/../.env`;
dotenv.config({path : envPath});

const app = fastify({logger:{
  prettyPrint:true,
}});
app.get('/', (req, res)=>{
  const swaggerRoute = process.env.SWAGGER_ROUTE_PREFIX;
  if (swaggerRoute) res.redirect(swaggerRoute);
  else res.send('Swagger Route Path is not available in .env');
});
app.register(fastifySwagger, swaggerConfig);
app.register(router, {prefix:'api'});
const start = async () => {
  try {
    if (process.env.PORT) {
      await app.listen(process.env.PORT);
      app.log.info(app.swagger());
    } else throw Error(`Port number is not available at ${envPath}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();