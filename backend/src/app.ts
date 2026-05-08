import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import testRoutes from "./routes/testRoutes";
import { errorHandler } from "./middleware/errorMiddleware";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", testRoutes);

app.use(errorHandler);

export default app;