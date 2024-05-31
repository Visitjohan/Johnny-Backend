import express from "express";

import propertiesRouter from "./routes/properties.js";
import reviewsRouter from "./routes/reviews.js";
import usersRouter from "./routes/users.js";
import hostsRouter from "./routes/hosts.js";
import amenitiesRouter from "./routes/amenities.js";
import bookingsRouter from "./routes/bookings.js";
import loginRouter from "./routes/login.js";
import logMiddleware from "../src/middleware/logMiddleware.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Global middleware
app.use(express.json());
app.use(logMiddleware);
//app.use(log);

// Resource routes
app.use("/users", usersRouter);
app.use("/reviews", reviewsRouter);
app.use("/properties", propertiesRouter);
app.use("/hosts", hostsRouter);
app.use("/amenities", amenitiesRouter);
app.use("/bookings", bookingsRouter);
app.use("/login", loginRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
