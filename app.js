
import express from "express";
import web from "./routes/web.js";
import student from "./routes/student.js";
import myLogger from "./middlewares/logger.middleware.js";
import connectDB from "./db/connectdb.js";
<<<<<<< Updated upstream
const app = express();
=======
import {createDynamicDoc, studentModel, teacherModel} from "./models/Student.js"; 
>>>>>>> Stashed changes
const port = process.env.PORT || "3001";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb2";
const app = express();

connectDB(DATABASE_URL); 
<<<<<<< Updated upstream
// app.set("view engine", "ejs");
// // app.use('/about', myLogger)
// app.use("/", web);
// app.use("/", student);
=======

// Create and save dynamic docs
createDynamicDoc(studentModel, {
  name: "Ali",
  age: 20,
  fees: 5500.5,
  hobbies: ["Reading", "Swimming"],
  comments: [{ value: "Good" }, { value: "Nice" }]
});

createDynamicDoc(teacherModel, {
  name: "Mr. Smith",
  subject: "Mathematics",
  salary: 45000.0
});
>>>>>>> Stashed changes

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});