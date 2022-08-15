import { Router } from "express";

 const router = Router();

 import {
     getProducts, getProductByID,createProduct, updateProductByID, deleteProductByID
} from "../controllers/product.controllers"; 
import { verifyToken, isAdmin } from '../middleswares';

 router.get('/', verifyToken, getProducts);
 router.get('/:productId', verifyToken, getProductByID);
 router.post('/', createProduct);
 router.put('/:productId', verifyToken, updateProductByID);
 router.delete('/:productId', verifyToken, deleteProductByID);

 export default router;