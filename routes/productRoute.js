

import express from 'express';
import { 
  createProduct, 
  deleteProduct, 
  getProduct, 
  getProducts, 
  updateProduct 
} from '../controllers/productController.js';
import { notAllowed } from '../utils/notAllowed.js';

const router = express.Router();

// ✅ Route for multiple products
router.route('/api/products')
  .get(getProducts)
  .post(createProduct)
  .all(notAllowed);

// ✅ Route for single product (with ID)
router.route('/api/products/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct)
  .all(notAllowed);

export default productRoute;
