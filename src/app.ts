import fastify from 'fastify';
import dotenv from 'dotenv';
import router from './router';

const envPath = `${__dirname}/../.env`;
dotenv.config({path : envPath});

const app = fastify({logger:{
  prettyPrint:true,
}});

app.register(router);

const start = async () => {
  try {
    if (process.env.PORT) {
      await app.listen(process.env.PORT);
    } else throw Error(`Port number is not available at ${envPath}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();