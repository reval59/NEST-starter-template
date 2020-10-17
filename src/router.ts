import {Router} from 'express';
import NasdaqController from './controllers/NasdaqController';

const router = Router();
router.use('/nasdaq', NasdaqController);
router.get('/', (req, res)=>{
  res.send(`${process.env.APP_ID} is running at http://${process.env.HOST}:${process.env.PORT}`);
});
export default router;