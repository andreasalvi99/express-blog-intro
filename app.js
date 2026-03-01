const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}`;
const posts = [
  {
    titolo: "Ciambellone",
    contenuto:
      "Un classico dolce da forno soffice e profumato, perfetto per colazione o merenda.",
    img: "ciambellone.jpeg",
    tags: ["dolci", "forno", "tradizione"],
  },
  {
    titolo: "Cracker alla barbabietola",
    contenuto:
      "Cracker croccanti con barbabietola nell’impasto, ideali come snack o aperitivo.",
    img: "cracker_barbabietola.jpeg",
    tags: ["salato", "barbabietola", "snack"],
  },
  {
    titolo: "Pane fritto dolce",
    contenuto:
      "Fette di pane fritte e zuccherate, una ricetta semplice e golosa della tradizione casalinga.",
    img: "pane_fritto_dolce.jpeg",
    tags: ["dolci", "fritto", "tradizione"],
  },
  {
    titolo: "Pasta alla barbabietola",
    contenuto:
      "Pasta dal colore vivace preparata con barbabietola, dal gusto delicato e leggermente dolce.",
    img: "pasta_barbabietola.jpeg",
    tags: ["primo", "barbabietola", "pasta"],
  },
  {
    titolo: "Torta paesana",
    contenuto:
      "Dolce rustico tipico della tradizione, preparato con ingredienti semplici e sapori autentici.",
    img: "torta_paesana.jpeg",
    tags: ["dolci", "tradizione", "rustico"],
  },
];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({
    message: "Server del mio blog",
  });
});

app.get("/bacheca", (req, res) => {
  res.json({
    results: posts,
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Server online on ${appUrl}`);
});
