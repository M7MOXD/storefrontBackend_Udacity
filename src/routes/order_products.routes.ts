// import express
import express from 'express';

// import controllers
import * as xOPController from '../controllers/order_products.controller';

// import auth
import { auth } from '../middlewares/auth';

// Create routes using express.Router()
const routes = express.Router();

// create route
routes.post('/products/:id/cart', auth, xOPController.create);

// show route
routes.get('/orders/:id/cart', auth, xOPController.cart);

// current route
routes.get('/cart', auth, xOPController.currentRecord);

// update route
routes.patch('/products/:id/cart', auth, xOPController.update);

// delete route
routes.delete('/products/:id/cart', auth, xOPController.remove);

// complete route
routes.post('/cart/complete', auth, xOPController.complete);

// export routers
export default routes;
