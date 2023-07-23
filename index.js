const express = require("express");
const app = express();
const cors = require("cors"); 

const problems = require("./problems.json");

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
    const typesParam = req.query.types;
    const countParam = req.query.count;

    if (typesParam && typesParam.toLowerCase() === "otwarte") {
      let otwarteProblems = problems.filter(
        (problem) => problem.type === "otwarte"
      );

      if (countParam) {
        const count = parseInt(countParam);
        otwarteProblems = otwarteProblems.slice(0, count);
      }

      res.json({ zadania: otwarteProblems });
    } else if (typesParam && typesParam.toLowerCase() === "zamkniete") {
      let zamknieteProblems = problems.filter(
        (problem) => problem.type === "zamkniete"
      );

      if (countParam) {
        const count = parseInt(countParam);
        zamknieteProblems = zamknieteProblems.slice(0, count);
      }

      res.json({ zadania: zamknieteProblems });
    } else {
      if (countParam) {
        const count = parseInt(countParam);
        const allProblems = problems.slice(0, count);
        res.json({ zadania: allProblems });
      } else {
        res.json({ zadania: problems });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "Błąd serwera" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = 3333;
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
