console.log("INFO Starting server");

const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Import methods
console.log("INFO Loading webhooks module");
const webhooks = require("./modules/webhooks.js");
webhooks.setup(app);

//Begin
const port = process.env.PORT || 29990;
app.listen(port, () => console.log(`INFO Listening on ${port}...`));
