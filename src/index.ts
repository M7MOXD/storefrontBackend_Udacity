// import express
import express from 'express';

// import cors
import cors from 'cors';

// import app config
import { PORT } from './config/app.config';

// import db
import './db/database';

// Create app
const app = express();

// Create port
const port = PORT;

// Turn JSON to Object
app.use(express.json());

// use cors
app.use(cors());

// main route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// import routes
import uRoutes from './routes/person.routes';
import pRoutes from './routes/product.routes';
import oRoutes from './routes/order.routes';
import opRoutes from './routes/order_products.routes';

// app routes
app.use(uRoutes);
app.use(pRoutes);
app.use(oRoutes);
app.use(opRoutes);

// other route
app.get('*', (req, res) => {
  res.status(404).send('Error!');
});

// run server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// export app
export default app;
