import mongoose from "mongoose";
export const Connection = async(connectionString) => {
  try {
    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Database connection error", error.message);
  }
};
export default Connection;
