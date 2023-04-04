const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  const { id } = req.params;
  const team = teams.some((t) => t.id === +id);

  if (!team) return res.sendStatus(404).json({ message: 'Time não encontrado'});
  next();
};

module.exports = existingId;