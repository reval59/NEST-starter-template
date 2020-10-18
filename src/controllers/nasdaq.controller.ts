import {FastifyPluginCallback} from 'fastify';
import {readFileAsync} from '@utils/fs';
import path from 'path';
import { NasdaqListing } from '../models/nasdaqListing.model';

const controller: FastifyPluginCallback = (app, opts, next) => {
  app.get('/', async (req, res) => {
    const fpath = path.join(__dirname, '../db/nasdaq.json');
    const file = await readFileAsync(fpath);
    try {
      const nasdaqListing: NasdaqListing[] = JSON.parse(<string>file);
      res.send(nasdaqListing.filter((el, i) => i < 50));
    } catch (err) {
      req.log.info(err);
      res.send([]);
    }
  });
  next();
};

export default controller;