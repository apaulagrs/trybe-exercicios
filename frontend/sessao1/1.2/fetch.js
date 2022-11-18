// const fetch = require('node-fetch');

// const fetchInspiration = () => {
//   const url = 'api.goprogram.ai/inspiration';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(`"${data.quote}" | ${data.author}`))
//     .catch((error) => console.log(`Algo deu errado - ${error}`));
// }

// fetchInspiration();

// Algo deu errado - TypeError: Only absolute URLs are supported

const fetch = require('node-fetch');

const fetchInspiration = async () => {
  const url = 'https://api.goprogram.ai/inspiration';

  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log(`"${data.quote}" | ${data.author}`);
  } catch (error) {
    console.log(`Algo deu errado - ${error}`);
  }
}

fetchInspiration();