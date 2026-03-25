import mongoose from "mongoose";
import axios from "axios";
import dotenv from "dotenv";
import Product from "./Model/productModel.js";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);


    const res = await axios.get("https://fakestoreapi.com/products");

   
    await Product.deleteMany();

  
    await Product.insertMany(res.data);

    console.log("Products inserted ✅");
    process.exit();

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedData();