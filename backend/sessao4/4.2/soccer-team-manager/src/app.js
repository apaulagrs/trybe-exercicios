const express = require('express');

const app = express();

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPFC',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
]

app.get('/teams', (req, res) => res.status(200).json({ teams }));
app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
})

module.exports = app;