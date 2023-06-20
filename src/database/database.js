import "dotenv/config";
import mongoose from "mongoose";

export default async function connectDatabase() {
  await mongoose.connect(
    `mongodb+srv://sir_aguiar:${process.env.PASSWORD}@cluster0.b1cnshs.mongodb.net/?retryWrites=true&w=majority`,
  );
}
