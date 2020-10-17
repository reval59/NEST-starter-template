import {Router} from 'express';
import NasdaqController from '@controllers/nasdaqController';

const router = Router();

router.get('/', (req, res)=>{
  res.send(`${process.env.APP_ID} is running at http://${process.env.HOST}:${process.env.PORT}`);
});
router.use('/nasdaq', NasdaqController);
export default router;