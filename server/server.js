const express = require("express");
require('dotenv').config();
const serveStatic = require("serve-static")
const cors = require("cors");
const path = require('path');
const knex = require("./knex");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const { v4: uuid } = require("uuid");


const PORT = process.env.PORT || 5000;
app.use(serveStatic(path.join(__dirname, 'dist')));

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/guides", async (req, res) => {
    try {
        const allGuides = await knex.select().table('guide');
        res.send(allGuides);
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

app.post("/guides/new", async (req, res) => {
    try {
        // const id = uuid();
        const { first_name, last_name, languages, hourly_rate, info, img, email, tour_locations } = req.body;
        const product = await stripe.products.create({
            name: first_name + last_name,
            description: info,
        })
        const price = await stripe.prices.create({
            unit_amount: hourly_rate,
            currency:'jpy',
            product: product.id,
        })
        const guide = {
            id: uuid(),
            first_name,
            last_name,
            email,
            tour_locations,
            languages,
            hourly_rate:price.unit_amount,
            info,
            img,
            price_id: price.id,
        }

        const response = await knex("guide").insert(guide);
        res.send("success");
    } catch (err) {
        console.error(err);
    }
})

app.post('/create-checkout-session', cors(), async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [
        'card',
      ],
      line_items: [
        {
          // TODO: replace this with the `price` of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success.html`,
      cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });
    res.redirect(303, session.url)
  });
/*

// {id: 1, first_name: 'Bob', last_name: "Marley", email: "ishotthesherrif@deputy.com", tour_locations: "Tokyo", languages: "English", hourly_rate: 6000, info: " "},

// */


app.delete("/guides/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await knex("guide").where("id", id).del();
        res.status(201).send(`Deleted guide at id: ${id}`);
    } catch (err) {
        console.log(err);
    }
})

app.get("*", async (req, res) => {
    try {
        res.send("Hola Mundo");
    } catch (err) {
        console.error(err);
    }
})

app.listen(PORT, (req, res) => {
    console.log(`App listening at http://localhost:${PORT}`);
})


