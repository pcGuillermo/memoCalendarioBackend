import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/product.routes'
import authRoutes from './routes/auth.routes'
import { createRoles } from './helpers/initialSetUp';

const app = express();
createRoles();

// Middleswares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/product', productRoutes);
app.use('/api/auth', authRoutes);


export default app;