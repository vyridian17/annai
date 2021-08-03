const express = require("express");
require('dotenv').config();
const cors = require("cors");
const knex = require("./knex");
const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/guides", async (req, res) => {
    try {
        const allGuides = await knex.select().table('guide');
        res.json(allGuides);
    } catch (err) {
        console.error(err);
    }
});

app.get("/guides/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const guide = await knex.select().table('guide').where('id', id);
        res.json(guide);
    } catch (err) {
        console.error(err);
    }
})

app.post("/guides", async (req, res) => {
    try {
        const guide = req.body
        const response = await knex("guide").insert(guide);
        res.send("success");
    } catch (err) {
        console.error(err);
    }
})
/*

{id: 1, first_name: 'Bob', last_name: "Marley", email: "ishotthesherrif@deputy.com", tour_locations: "Tokyo", languages: "English", hourly_rate: 6000, info: " "},

*/


app.delete("/guides/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await knex("guide").where("id", id).del();
        res.status(201).send(`Deleted guide at id: ${id}`);
    } catch (err) {
        console.log(err);
    }
})

app.listen(PORT, (req, res) => {
    console.log(`App listening at http://localhost:${PORT}`);
})


