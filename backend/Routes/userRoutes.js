import { Router } from "express";
import { login, signup } from "../Controllers/userController.js";
import auth from '../AuthMiddleware/authMiddleware.js';
import { addToCart,getCart,removeFromCart,updateCart } from "../Controllers/cartController.js";
import Product from "../Model/productModel.js";

const router=Router();

router.post("/login",login);
router.post("/signup",signup);

router.post("/add-to-cart", auth, addToCart);
router.get("/cart", auth, getCart);
router.post("/remove", auth, removeFromCart);

router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.put("/update-cart", auth, updateCart);

export default router;