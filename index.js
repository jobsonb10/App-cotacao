const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());
const port = 3000;

const getLatestPrice = async (symbol) => {
    const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote/latestPrice?token=sk_b802f575af34471aab0a68307f414b7f`);
    return response;
}


app.get("/price/:symbol", async (req,res) => {
    const symbol = req.params.symbol;
    const price = await getLatestPrice(symbol);
    res.json(price.data);
})

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`);
})