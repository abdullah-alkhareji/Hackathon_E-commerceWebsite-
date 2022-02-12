const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./database/db");
const productsRoutes = require("./api/products/routes");
const userRoutes = require("./api/users/routes");
const path = require("path");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    // originalUrl: method:host:protocolhostname
    console.log(
      `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
    );
    next();
  });

  //routes
  app.use("/products", productsRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/user", userRoutes);

// Path not found handiling
app.use((req, res, next) => {
  res.status(404).json({ msg: "path not found!" });
});

// Error handiling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err.message || "internail server error!");
});



app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port", process.env.PORT);
  connectDb();
});
