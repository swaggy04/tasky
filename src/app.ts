import express from "express";
import jobRoutes from "./routes/job.routes";

const app = express();

app.use(express.json());

// Mount all job-related routes
app.use("/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

export default app;