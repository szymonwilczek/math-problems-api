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

app.get("/random-problems", (req, res) => {
  try {
    let allProblems = problems.sort(() => Math.random() - 0.5);

    //random number of problems in range 5-10
    const count = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    allProblems = allProblems.slice(0, count);

    res.json({ zadania: allProblems });
  } catch (error) {
    res.status(500).json({ error: "Błąd serwera" });
  }
});

app.get("/problems", (req, res) => {
  try {
    const typesParam = req.query.types;
    const countParam = req.query.count;
    const maturaParam = req.query.matura;
    const difficultyParam = req.query.difficulty; // Nowy parametr

    problems.sort(() => Math.random() - 0.5);

    if (maturaParam === true || maturaParam === "true") {
      let easyProblems = problems.filter(
        (problem) => problem.difficulty === "easy"
      );
      let mediumProblems = problems.filter(
        (problem) => problem.difficulty === "medium"
      );
      let hardProblems = problems.filter(
        (problem) => problem.difficulty === "hard"
      );

      const easyCount = 7;
      const mediumCount = 8;
      const hardCount = 5;

      easyProblems = easyProblems.slice(0, easyCount);
      mediumProblems = mediumProblems.slice(0, mediumCount);
      hardProblems = hardProblems.slice(0, hardCount);

      const maturaProblems = [
        ...easyProblems,
        ...mediumProblems,
        ...hardProblems,
      ];

      return res.json({ zadania: maturaProblems });
    } else {
      let filteredProblems = problems;

      if (typesParam && typesParam.toLowerCase() === "otwarte") {
        filteredProblems = filteredProblems.filter(
          (problem) => problem.type === "otwarte"
        );
      } else if (typesParam && typesParam.toLowerCase() === "zamkniete") {
        filteredProblems = filteredProblems.filter(
          (problem) => problem.type === "zamkniete"
        );
      }

      if (difficultyParam) {
        filteredProblems = filteredProblems.filter(
          (problem) => problem.difficulty === difficultyParam
        );
      }

      if (countParam) {
        const count = parseInt(countParam);
        filteredProblems = filteredProblems.slice(0, count);
      }

      res.json({ zadania: filteredProblems });
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
