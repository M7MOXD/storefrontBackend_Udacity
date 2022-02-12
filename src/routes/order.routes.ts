// import express
import express from 'express';

// import controllers
import * as xOController from '../controllers/order.controller';

// import auth
import { auth } from '../middlewares/auth';

// Create routes using express.Router()
const routes = express.Router();

// index route
routes.get('/orders', auth, xOController.index);

// show route
routes.get('/orders/:id', auth, xOController.show);

// current route
routes.get('/order/current', auth, xOController.currentRecord);

// export routers
export default routes;
