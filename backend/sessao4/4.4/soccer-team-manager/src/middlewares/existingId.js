const existingId = (req, res, next) => {
    const id = +req.params.id;
    if (teams.some((t) => t.id === id)) {
      next();
    } else {
      res.sendStatus(404);
    }
};

module.exports = existingId;