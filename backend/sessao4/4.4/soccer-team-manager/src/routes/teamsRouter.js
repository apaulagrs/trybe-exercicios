const express = require('express');

const validateTeam = require('../middlewares/validateTeam');
const existingId = require('../middlewares/existingId');
const apiCredentials = require('../middlewares/apiCredentials');

const router = express.Router();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

router.get('/', (_req, res) => res.json(teams));

router.use(apiCredentials);

router.get('/:id', existingId, (req, res) => {
  const { id } = req.params;
  const team = teams.find((t) => t.id === +id);
  return res.json(team);
});

router.post('/', validateTeam,  (req, res) => {
  if (
    !req.teams.teams.includes(req.body.sigla) 
    && teams.every((t) => t.sigla !== req.body.sigla)
    ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla'});
  };

  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  return res.status(201).json(team);
});

router.put('/:id', existingId, validateTeam, (req, res) => {
  const { id } = +req.params;
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  return res.status(200).json(updated);
});

router.delete('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  return res.sendStatus(204);
});

module.exports = router;