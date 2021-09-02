const pg = require("pg");

const client = new pg.Client({
  user: "lhaiajot",
  host: "postgresql://lhaiajot:5spF5TphCmmaYfRYHNtyTW85iM7BbXrD@kesavan.db.elephantsql.com/lhaiajot",
  database: "lhaiajot",
  password: "5spF5TphCmmaYfRYHNtyTW85iM7BbXrD",
  port: 5432,
});

module.exports = client;
