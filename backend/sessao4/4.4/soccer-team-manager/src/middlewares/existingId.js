const existingId = (req, res, next) => {
  const id = +req.params.id;
  const teams = teams.some((t) => t.id === id);

  if (!teams) return res.sendStatus(404).json({ message: 'Time não encontrado'});
  next();
};

module.exports = existingId;