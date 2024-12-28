import express from "express";
import web from "./routes/web.js";
import student from "./routes/student.js";
import myLogger from "./middlewares/logger.middleware.js";
import connectDB from "./db/connectdb.js";
const app = express();
const port = process.env.PORT || "3001";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb2";

connectDB(DATABASE_URL); 
// app.set("view engine", "ejs");
// // app.use('/about', myLogger)
// app.use("/", web);
// app.use("/", student);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
