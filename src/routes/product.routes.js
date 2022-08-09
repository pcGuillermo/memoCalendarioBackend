import { Router } from "express";

 const router = Router();

 import {
     getProducts, getProductByID,createProduct, updateProductByID, deleteProductByID
} from "../controllers/product.controllers"; 

 router.get('/', getProducts);
 router.get('/:productId', getProductByID);
 router.post('/', createProduct);
 router.put('/:productId', updateProductByID);
 router.delete('/:productId', deleteProductByID);

 export default router;