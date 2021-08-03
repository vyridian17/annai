const express = require("express");
const cors = require("cors");
const db = require("knex");
const app = express();

app.listen(4000, (req, res) => {
    console.log("App listening on port 4000");
})
