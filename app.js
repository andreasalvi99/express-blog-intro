const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}`;
const posts = [
  {
    titolo: "Guida base al backtick",
    contenuto:
      "Il backtick è utile in Markdown e JavaScript per scrivere codice inline e template string.",
    tags: ["markdown", "javascript", "sintassi"],
  },
  {
    titolo: "Allenamento in definizione",
    contenuto:
      "Per perdere grasso mantenendo massa serve deficit calorico moderato e allenamento costante.",
    tags: ["fitness", "definizione", "nutrizione"],
  },
  {
    titolo: "Async e Await spiegati semplice",
    contenuto:
      "Async e await permettono di gestire operazioni asincrone in modo più leggibile rispetto alle promise pure.",
    tags: ["javascript", "async", "programmazione"],
  },
  {
    titolo: "SQL per principianti",
    contenuto:
      "Le query SELECT permettono di recuperare dati da una tabella filtrandoli con WHERE.",
    tags: ["database", "sql", "backend"],
  },
  {
    titolo: "Cos'è il DOM",
    contenuto:
      "Il DOM rappresenta la struttura di una pagina HTML e permette di modificarla tramite JavaScript.",
    tags: ["html", "javascript", "frontend"],
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Server del mio blog",
  });
});

app.listen(port, () => {
  console.log(`Server online on ${appUrl}`);
});
