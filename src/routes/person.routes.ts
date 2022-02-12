// import express
import express from 'express';

// import controllers
import * as pController from '../controllers/person.controller';

// import auth
import { auth } from '../middlewares/auth';

// Create routes using express.Router()
const routes = express.Router();

// create route
routes.post('/persons', pController.create);

// index route
routes.get('/persons', auth, pController.index);

// show route
routes.get('/persons/profile', auth, pController.show);

// update route
routes.patch('/persons', auth, pController.update);

// delete route
routes.delete('/persons', auth, pController.remove);

// authentication route
routes.post('/persons/login', pController.authentication);

// logout route
routes.delete('/persons/logout', auth, pController.logout);

// logoutall route
routes.delete('/persons/logoutall', auth, pController.logoutAll);

// export routers
export default routes;
