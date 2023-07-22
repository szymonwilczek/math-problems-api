const express = require("express");
const app = express();
const cors = require("cors"); // Dodajemy obsługę CORS dla zapytań z innych domen

// Dane z pliku JSON - zakładając, że są w odpowiednim formacie
const problems = require("./problems.json");

// Dodajemy middleware do obsługi zapytań CORS
app.use(cors());

// Endpoint do pobierania losowego zadania
app.get("/random-problem", (req, res) => {
  try {
    const random_problem =
      problems[Math.floor(Math.random() * problems.length)];
    res.json({ zadanie: random_problem });
  } catch (error) {
    res.status(500).json({ error: "Błąd serwera" });
  }
});

app.get("/problems", (req, res) => {
  try {
    res.json({ zadania: problems });
  } catch (error) {
    res.status(500).json({ error: "Błąd serwera" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Ustawiamy port, na którym będzie nasłuchiwał serwer
const port = 3333;
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
