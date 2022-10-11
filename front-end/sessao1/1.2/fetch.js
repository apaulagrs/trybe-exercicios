const fetch = require('node-fetch');

const fetchInspiration = () => {
  const url = 'https://api.goprogram.ai/inspiration';

  console.log(fetch(url));
}

fetchInspiration();