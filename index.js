require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());


app.post("https://eliziariodm.github.io/", async (req, res) => {
    console.log("req.body", req.body);

    const chat_id = req.body.message.chat.id;

    await axios.post("https://api.telegram.org/bot6498836648:AAEJtI6Z0ZR4RQtuMNcIZEeMy-HlEdrcJ44/sendMessage", {
        chat_id,
    })

    return res.send();
});