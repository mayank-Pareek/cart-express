import { products } from "./static/data.js";
import Product from "./models/productSchema.js";
const DefaultData = async() => {
  try {
    await Product.insertMany(products);
    console.log("Data Inserted");
  } catch (error) {
    console.log("Error inserting default data", error.message);
  }
};
export default DefaultData;
