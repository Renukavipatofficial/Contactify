const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorhandler"); // Correctly import the middleware
const dotenv = require("dotenv").config();

connectDb();

const app = express();
const port = process.env.PORT || 4023;

app.use(express.json()); // Middleware for parsing JSON bodies

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler); // Use the error handler middleware

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
