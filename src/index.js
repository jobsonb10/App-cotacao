const express = require("express");
const axios = require("axios");
const Acao = require("./models/acoes");

const app = express();

const port = 3333;

Acao.sync();

const getLatestPrice = async (symbol) => {
  const response = await axios.get(
    `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=sk_b802f575af34471aab0a68307f414b7f`
  );
  return response;
};


app.get("/", (req, res) => {
  return res.json({ hello: "World" });
});

app.get("/price/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  symbol.toUpperCase();

  const acao = await Acao.findOne({ where: { symbol: symbol } });
  if (acao == null) {
    const quote = await getLatestPrice(symbol);
    if (quote) {
      const newAcao = {
        symbol: quote.data.symbol,
        name: quote.data.companyName,
        latestPrice: quote.data.latestPrice,
      };
      Acao.create(newAcao);
      res.json(newAcao);
      return;
    }

    res.json({ error: "Ação não encontrada!"})
  }
  res.json({
    nameOfCompany: acao.name,
    symbol: acao.symbol,
    latestPrice: acao.latestPrice,
  });
});

app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}`);
});
