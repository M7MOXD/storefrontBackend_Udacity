// import express
import express from 'express';

// import controllers
import * as xPController from '../controllers/product.controller';

// import auth
import { auth } from '../middlewares/auth';

// Create routes using express.Router()
const routes = express.Router();

// create route
routes.post('/products', auth, xPController.create);

// index route
routes.get('/products', xPController.index);

// show route
routes.get('/products/:id', xPController.show);

// update route
routes.patch('/products/:id', auth, xPController.update);

// delete route
routes.delete('/products/:id', auth, xPController.remove);

// export routers
export default routes;
