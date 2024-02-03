import mongoose from "mongoose";

export const connectDb = async () => {
  const mongoURI = "mongodb+srv://mihir123:mihir123@resume.nsvykos.mongodb.net/?retryWrites=true&w=majority";
  if (!mongoURI) {
    throw new Error("MongoDB URI not found");
  }
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

export const disconnectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      await mongoose.disconnect();
      console.log("Mongo DB disconnected");
    } else {
      console.log("No active Mongo DB connection");
    }
  } catch (error) {
    console.log("Error disconnecting from MongoDB", error);
  }
};
