const getPlanet = () => {
    const mars = {
      name: 'Mars',
      distanceFromSun: {
        value: 227900000,
        measurementUnit: 'kilometers',
      },
    };
    console.log('Returned planet: ', mars);
};
  
// setTimeout(() => getPlanet(), 4000); // Imprime Marte depois de 4 segundos

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback, error) =>  {
    const currentTemperature = getMarsTemperature();
    setTimeout(() => {
        if (currentTemperature < 58) {
            return callback(currentTemperature), messageDelay();
        }
        else {
            const errorMessage = 'Robot is busy!';
            error(errorMessage);
        }
    });
};

// setTimeout(() => console.log(sendMarsTemperature()), messageDelay()); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

// sendMarsTemperature(temperatureInFahrenheit, handleError); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

// sendMarsTemperature(greet, handleError); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
};

describe('Testa se a função uppercase retorna o esperado', () => {
  it('Retorna indefinido quando não é passado nenhum parâmetro.', () => {
      const actual = uppercase();
      const expected = undefined;
      expect(actual).toBe(expected);
  })
});
