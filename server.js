const express = require("express");
const getRoute = require ("./cart-items");

const app = express(); //function call
const port = 8888;

app.use(express.json());
app.use(express.static('./public'));
app.use("/cart-items", getRoute);


app.listen(port, () => console.log(`server up and running on localhost: ${port}`));
