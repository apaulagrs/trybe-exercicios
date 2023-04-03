const levels = ['Fácil', 'Médio', 'Difícil'];

const difficultyValidation = (req, res, next) => {
  const { difficulty } = req.body;
  if (!difficulty) return res.status(400).json({ message: 'O campo "difficulty" é obrigatório' });
  if (!difficulty.includes(levels)) {
    return res.status(400)
    .json({ message: 'O campo "difficulty" deve ser "Fácil", "Médio" ou "Difícil"' });
  }
  next();
};

module.exports = difficultyValidation;