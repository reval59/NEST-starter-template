import {FastifyPluginCallback} from 'fastify';
import NasdaqController from '@controllers/nasdaq.controller';

const router: FastifyPluginCallback = (app, opts, next) => {
  app.register(NasdaqController, {prefix:'nasdaq'});
  next();
};

export default router;