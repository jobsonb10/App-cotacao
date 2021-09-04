const Sequelize = require("sequelize");
const connection = require("../database/db");

const Acao = connection.define("acoes", {
    name: {
        type: Sequelize.STRING
    },
    latestPrice: {
        type: Sequelize.INTEGER
    },
    symbol: {
        type: Sequelize.STRING
    }
});

module.exports = Acao;