import express from "express";
import web from "./routes/web.js";
import student from "./routes/Student.js";
import myLogger from "./middlewares/logger.middleware.js";
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from "./db/connectdb.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import './models/Student.js';
import { getAllDoc, getSpecificFieldDoc, updateDoc} from "./models/Student.js";

const app = express();
const port = process.env.PORT || "3001";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb2";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  name:'mysession',
  secret:'akey',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge:200000,
    secure: false 
  }
}))

app.use(cookieParser());
app.use('/', web);
connectDB(DATABASE_URL); 

// Create and save doc
// createDoc("Ali", 20, 5500.5, ["Reading", "Swimming"], [{ value: "Good" }, { value: "Nice" }]);\

// getAllDoc();
// getSpecificFieldDoc(); 
// updateDoc('6770edbe22e37f99cab8cedd');
// app.set("view engine", "ejs");
// // app.use('/about', myLogger)
// app.use("/", web);
// app.use("/", student);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
