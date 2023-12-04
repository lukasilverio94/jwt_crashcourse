const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const app = express();
const port = process.env.PORT;
// middleware
app.use(express.json());
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI = process.env.DB_URI;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(port, () =>
      console.log(`Server started at http://localhost:${port}`)
    )
  )
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.use(authRoutes);
