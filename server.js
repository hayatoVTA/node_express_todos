const express = require("express"),
  app = express(),
  port = process.env.PORT || 3100,
  mongoose = require("mongoose"),
  Task = require("./api/models/taskModel"),
  bodyParser = require("body-parser");

const cors = require('cors');

// Handle an error when we use "npm run start" command
const options = {
  useUnifiedTopology : true,
  useNewUrlParser: true,
}

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb", options);

app.use(cors({
  origin: 'http://localhost:3000', // Access permit origin
  credentials: true, // Add Access-Control-Allow-Credentials to response headers
  optionsSuccessStatus: 200 // Set response status (200)
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./api/routes/taskRoutes");
routes(app);

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
