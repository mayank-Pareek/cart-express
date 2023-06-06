import { products } from "./static/data.js";
import Product from "./models/productSchema.js";

const insertDefaultData = async () => {
  try {
    for (const product of products) {
      const existingProduct = await Product.findOne({ id: product.id });
      if (!existingProduct) {
        await Product.create(product);
      }
    }
    console.log("Default data inserted successfully.");
  } catch (error) {
    console.log("Error inserting default data:", error.message);
  }
};

export default insertDefaultData;
