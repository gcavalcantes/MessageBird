const express = require("express");
const app = express();

const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    /* Listens to the specified port and runs a command. */
    console.log("Server running on port 3001.");
  });
});
