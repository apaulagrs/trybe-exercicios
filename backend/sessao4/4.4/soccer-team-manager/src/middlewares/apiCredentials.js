const fs = require('fs/promises');

const apiCredentials = async function (req, res, next) {
  const token = req.header('X-API-TOKEN');
  const authdata = await fs.readFile('./authdata.json', { encoding: 'utf-8' });
  const authorized = JSON.parse(authdata);

  if (token in authorized) {
    req.teams = authorized[token];
    return next();
  };

  res.sendStatus(401);
};

module.exports = apiCredentials;