import express from "express";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import TeacherRoute from "./routes/TeacherRoute.js";
import ProductRoute from "./routes/ProductRoute.js";


dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`port çalışıyor ${port}`);
});

app.use(express.json());

app.use("/user", UserRoute);
app.use("/teacher", TeacherRoute);
app.use("/product",ProductRoute)