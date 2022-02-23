import express from "express";
import morganMiddleware from "../assets/http.logger";

const app = express();
app.use(morganMiddleware);

app.get("/api", (req, res) => {
  res.send({ message: "Welcome to backend!" });
});

export default app;