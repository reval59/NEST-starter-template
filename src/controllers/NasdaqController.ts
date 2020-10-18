import {FastifyPluginCallback} from 'fastify';
import {readFileAsync} from '@utils/fs';
import path from 'path';


const controller: FastifyPluginCallback = (app, opts, next) => {
  app.get('/', async (req, res) => {
    const fpath = path.join(__dirname, '../db/nasdaq.json');
    const file = await readFileAsync(fpath);
    try {
      const nasdaqListing = JSON.parse(<string>file);
      res.send(nasdaqListing);
    } catch (err) {
      req.log.info(err);
      res.send([]);
    }
  });
  next();
};

export default controller;