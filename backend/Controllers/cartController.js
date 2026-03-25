import Cart from "../Model/cartModel.js";
import mongoose from "mongoose";

export const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity: 1 }]
      });
    } else {
     
const item = cart.items.find(
  i => i.productId && i.productId.toString() === productId
);
      if (item) {
        item.quantity += 1;
      } else {
        cart.items.push({ productId, quantity: 1 });
      }
    }

    await cart.save();

    res.json({ message: "Added to cart", cart });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ userId })
    .populate("items.productId");;

    if (!cart) {
      return res.json({ items: [] });
    }

    res.json(cart);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    const cart = await Cart.findOne({ userId });

    cart.items = cart.items.filter(
  i => i.productId && i.productId.toString() !== productId
);

    await cart.save();

    res.json({ message: "Item removed", cart });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const updateCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, type } = req.body;

    
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

   
    const item = cart.items.find(
      (i) => i.productId.toString() === productId
    );

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

   
    if (type === "inc") {
      item.quantity += 1;
    } else if (type === "dec") {
      item.quantity -= 1;

     
      if (item.quantity <= 0) {
        cart.items = cart.items.filter(
          (i) => i.productId.toString() !== productId
        );
      }
    } else {
      return res.status(400).json({ message: "Invalid action type" });
    }

    await cart.save();

   
    await cart.populate("items.productId");

    res.json({
      message: "Cart updated successfully",
      cart
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};