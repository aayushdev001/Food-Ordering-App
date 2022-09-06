import express from 'express';
import {getMeals} from '../controllers/meals.js';
import {saveOrder} from '../controllers/orders.js';

const router = express.Router();

router.get('/meals', getMeals);
router.post('/orders', saveOrder);

export default router;