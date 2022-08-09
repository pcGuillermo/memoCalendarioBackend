import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/product.routes'

const app = express();

// Middleswares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/product', productRoutes);

export default app;