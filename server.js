import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import pgp from "pg-promise";

import bookRoutes from "./router/test";

/* CONFIGURATIONS  */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.use("api/v1/test", testRoutes);

/* CONNECTION */
const PORT = process.env.PORT || 9000;

const db = pgp(process.env.DB_URL);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
