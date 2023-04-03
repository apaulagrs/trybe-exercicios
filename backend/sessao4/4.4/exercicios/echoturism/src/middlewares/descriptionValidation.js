const message = (campo) => `O campo ${campo} é obrigatório`;

const descriptionValidation = (req, res, next) => {
  const { createdAt, rating, difficulty } = req.body.description;
  if (!req.body.description) return res.status(400).json({ message: message('"description"') });
  if (!createdAt) return res.status(400).json({ message: message('"createdAt"') });
  if (!rating) return res.status(400).json({ message: message('"rating"') });
  if (!difficulty) return res.status(400).json({ message: message('"difficulty"') });
  next();
};

module.exports = descriptionValidation;