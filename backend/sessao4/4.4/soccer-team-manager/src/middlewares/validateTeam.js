const validateTeam = (req, res) => {
    const requiredProperties = ['nome', 'sigla'];
    if (requiredProperties.every((property) => property in req.body)) {
      next();
    } else {
      res.sendStatus(400);
    }
};

module.exports = validateTeam;