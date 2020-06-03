const express = require("express");
const { Client } = require("pg");
const bodyParser = require("body-parser");
const app = express();
const api = require("./routes/index");
const port = process.env.PORT || 5000;
//https://node-postgres.com/api/client
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "admin",
  password: "admin",
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", api);

app.listen(port, () => console.log(`Listening on port ${port}`));
