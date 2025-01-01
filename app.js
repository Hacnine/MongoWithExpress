import express from "express";
import web from "./routes/web.js";
import student from "./routes/Student.js";
import myLogger from "./middlewares/logger.middleware.js";
import connectDB from "./db/connectdb.js";
import './models/Student.js';
import { getAllDoc, getSpecificFieldDoc} from "./models/Student.js";
const app = express();
const port = process.env.PORT || "3001";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb2";

connectDB(DATABASE_URL); 

// Create and save doc
// createDoc("Ali", 20, 5500.5, ["Reading", "Swimming"], [{ value: "Good" }, { value: "Nice" }]);\

getAllDoc();
getSpecificFieldDoc(); 
// app.set("view engine", "ejs");
// // app.use('/about', myLogger)
// app.use("/", web);
// app.use("/", student);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
