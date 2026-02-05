import cookieParser from "cookie-parser";
import express from "express";
import contactRouter from "./routes/contact.routes.js";
import { PORT } from "./config/env.js";
import connectToMongoDB from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import { generalRateLimiter } from "./middlewares/ratelimit.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(generalRateLimiter);

app.use("/api/v1/contacts", contactRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the OMYTECH backend API");
});

app.use(errorMiddleware);

app.listen(PORT, async () => {
  await connectToMongoDB();
  console.log(`The OMYTECH backend API is running on http://localhost:${PORT}`);
});

export default app;