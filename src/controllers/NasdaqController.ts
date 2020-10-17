import {Router} from 'express';
import {readFileAsync} from '@utils/fs';

const router = Router();
router.get('/', (req, res) => {
  readFileAsync('../db/nasdaq.json').then((data)=> {
    console.log(data);
  });
  res.send('Hello ');
});

export default router;