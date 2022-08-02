 import { Router } from 'express';
 import {getUser, creatUser, upDelete, upDate, getOneUser} from '../controllers/user.controllers.js';
 import { createIncome, deleteIncome, editIncome, getIncome, getOneIncome } from '../controllers/ingresos.controllers.js';
 import { createExpense, deleteExpense, editExpense, getExpenses, getOneExpense } from '../controllers/egresos.controllers.js';

 const router = Router();

 router.get('/user', getUser);
 router.post('/user', creatUser);
 router.put('/user/:id', upDate);
 router.delete('/user/:id', upDelete);
 router.get('/user/:id', getOneUser);

 router.get('/income', getIncome);
 router.post('/income', createIncome);
 router.put('/income/:id',editIncome );
 router.delete('/income/:id', deleteIncome);
 router.get('/income/:id', getOneIncome  );

 router.get('/expenses', getExpenses );
 router.post('/expenses', createExpense);
 router.put('/expenses/:id', editExpense);
 router.delete('/expenses/:id', deleteExpense);
 router.get('/expenses/:id', getOneExpense);

export default router;
