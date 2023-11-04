import { Router } from "express";
import { createCategory, deleteCategory, getCategory, updateCategory } from "../controllers/categoryControllers";

const router = Router();

router.route("/")
    .get(getCategory)
    .post(createCategory);

router.route("/:id")
    .patch(updateCategory)
    .delete(deleteCategory);

export default router;