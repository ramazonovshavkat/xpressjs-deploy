import express from "express";
import Serverless from "serverless-http";

const app = express();

app.get("/", (req, res) => {
    res.send("Serverdan Salom");
});

app.get("/about", (req, res) => {
    res.json({
        name:"Shavkat",
        surname:"Ramazonov",
        age: 34,
    });
});

export const handler = Serverless(app);
 