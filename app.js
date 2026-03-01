const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}`;

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Server online on ${appUrl}`);
});
