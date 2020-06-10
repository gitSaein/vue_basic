const functions = require("firebase-functions")
const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const api = require("./routes/index");
const port = process.env.PORT || 5000;
//https://node-postgres.com/api/client




app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", api);

app.listen(port, () => console.log(`Listening on port ${port}`));

exports.api = functions.https.onRequest(app)