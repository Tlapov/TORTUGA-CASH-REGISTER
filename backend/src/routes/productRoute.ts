import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProductByCategory, updateProduct } from "../controllers/productControllers";
import authMiddleware from "../middlewares/auth.middlewares";


const router = Router();

router.route("/")
    .get(getProduct)
    .post(createProduct);

router.route("/:id")
    .delete(deleteProduct)
    .patch(updateProduct);    

export default router;