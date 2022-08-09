const express = require("express");
const app = express();

const students = [];

app.get("/", (req, res) => {
  res.json(students);
});

app.post("/", (req, res) => {
  const student = {
    name: "Jacky",
  };
  students.push(student);

  res.json(student);
});
app.get("/", (req, res) => {
  res.json("Un étudiant a bien été ajouté");
});

module.exports = app;
