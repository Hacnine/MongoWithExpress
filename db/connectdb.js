import mongoose from "mongoose";

const DB_OPTIONS = {
  // user:'admin2',
  // pass:'123',
  dbName:'schooldb',
  // authSource:'schooldb2',
};

const connectDB = (DATABASE_URL) => {
  return mongoose
    .connect(DATABASE_URL, DB_OPTIONS)
    .then(() => {
      console.log("Alhamduillah connected to the database");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;