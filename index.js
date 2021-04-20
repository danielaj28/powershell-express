console.log("INFO Starting server");

const fs = require("fs");
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Load config
try {
  app.config = JSON.parse(fs.readFileSync("config.json"));
} catch (error) {
  console.error(`Unable to load config.json error: ${error}`);
  return;
}

//Import methods
console.log("INFO Loading webhooks module");
const webhooks = require("./modules/webhooks.js");
webhooks.setup(app);

//Begin
const port = process.env.PORT || app.config.port || 29990;
app.listen(port, () => console.log(`INFO Listening on ${port}...`));
