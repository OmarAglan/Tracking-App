// Description: This is the main file of the application
// Author: Omar Anwar Aglan
// Date: 2024-03-01

/**
 * Imports the express, body-parser, cors, and morgan packages.
 *
 * express - Web framework for node.js
 * body-parser - Parse incoming request bodies
 * cors - Enable CORS (Cross-Origin Resource Sharing)
 * morgan - HTTP request logger middleware
 */
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";

/**
 * Configures middleware for the Express app:
 * - morgan: HTTP request logger
 * - bodyParser.json(): Parse JSON request bodies
 * - cors(): Enable CORS (Cross-Origin Resource Sharing)
 */
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

/**
 * Sends a simple welcome message to the client.
 */
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to the Tracking API!",
  });
});

/**
 * Starts the Express server listening on port 3000.
 * If PORT environment variable is defined, use that instead of 3000.
 * Logs a message when the server starts.
 */
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
