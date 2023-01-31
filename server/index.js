const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    /* Listens to the specified port and runs a command. */
    console.log("Server running on port 3001.");
  });
});
