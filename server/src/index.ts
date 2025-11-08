import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { authMiddleware } from "./middleware/authMiddleware";
/* ROUTES IMPORT */
import customerRoutes from "./routes/customerRoutes";
import managerRoutes from "./routes/managerRoutes";
import contractorRoutes from "./routes/contractorRoutes";
import bookingRoutes from "./routes/bookingRoutes";
import applicationRoutes from "./routes/applicationRoutes";
import placeRoutes from "./routes/placeRoutes";
import postRoutes from "./routes/postRoutes";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
  res.send("This is home route");
});

// DOES NOT REQUIRE AUTH INITALLY
app.use("/api/applications", applicationRoutes);
app.use("/api/contractors", contractorRoutes);

// REQUIRED AUTH INITALLY
app.use(
  "/api/bookings",
  authMiddleware(["manager", "customer"]),
  bookingRoutes
);
app.use("/api/posts", authMiddleware(["manager", "customer"]), postRoutes);
app.use("/api/customers", authMiddleware(["customer"]), customerRoutes);
app.use("/api/managers", authMiddleware(["manager"]), managerRoutes);

// FOR GOOGLE DEVELOPER API
// app.use("/api/places", placeRoutes);

/* LISTENING TO SERVER */
const port = Number(process.env.PORT) || 3002;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
