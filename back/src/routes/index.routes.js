 import { Router } from 'express';
 import {getUser, creatUser, upDelete, upDate, getOneUser} from '../controllers/user.controllers.js';
 import { } from '../controllers/ingresos.controllers.js';

 const router = Router();

 router.get('/user', getUser);
 router.post('/user', creatUser);
 router.put('/user/:id', upDate);
 router.delete('/user/:id', upDelete);
 router.get('/user/:id', getOneUser);




export default router;
