import {FastifyPluginCallback, FastifySchema} from 'fastify';
import {readFileAsync} from '@utils/fs';
import path from 'path';
import { NasdaqListing } from '@models/nasdaqListing.model';

const schema: FastifySchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type:'object',
        properties: {
          companyNmae: {type: 'string'},
          financialStatus: {type: 'string'},
          marketCategory: {type: 'string'},
          roundLotSize: {type: 'integer'},
          securityName: {type: 'string'},
          symbol: {type: 'string'},
          testIssue: {type: 'string'},
        },
      },     
    },
  },
};
const controller: FastifyPluginCallback = (app, opts, next) => {
  app.get('/', {schema}, async (req, res) => {
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