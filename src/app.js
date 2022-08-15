import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/product.routes'
import authRoutes from './routes/auth.routes'
import cors from 'cors';
// import { createRoles } from './helpers/initialSetUp';
import usersRoutes from "./routes/user.routes.js";

const app = express();
// createRoles();

// Middleswares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/api/product', productRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/users", usersRoutes);


export default app;