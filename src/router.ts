import {FastifyPluginCallback} from 'fastify';
import {AddressInfo} from 'net';
import NasdaqController from '@controllers/nasdaqController';

const router: FastifyPluginCallback = (app, opts, next) => {
  app.get('/', (req, res)=>{
    const {address, family, port} = <AddressInfo>app.server.address();
    res.send(`${process.env.APP_ID} is running in ${family} at ${address}:${port}`);
  });
  app.register(NasdaqController, {prefix:'nasdaq'});
  next();
};

export default router;