const express = require("express");
const app = express();
const connectToDb = require("./config/db");
const PORT = process.env.PORT || 5000

connectToDb();

app.get("/", (req, res) => {
    res.send("My app is up")
    console.log("My app is up");
})

app.listen(PORT, () => {
    console.log(`Listing to port ${PORT}`);
})