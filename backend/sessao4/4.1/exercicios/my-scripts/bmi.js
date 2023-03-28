const readlineSync = require('readline-sync');

const weightQuestion = readlineSync.questionFloat("What's your weight? (kg) ");
const heightQuestion = readlineSync.questionInt("What's your height? (cm) ");

const categoryBMI = (bmi) => {
    if (bmi <= 18.5) {
        console.log('Abaixo do peso (magreza)');
    } else if (bmi >= 18.5 && bmi < 25) {
        console.log('Peso normal');
    } else if (bmi >= 25 && bmi < 30) {
        console.log('Acima do peso (sobrepeso)');
    } else if (bmi >= 30 && bmi < 35) {
        console.log('Obesidade grau I');
    } else if (bmi >= 35 && bmi < 40) {
        console.log('Obesidade grau II');
    } else {
        console.log('Obesidade graus III e IV')
    }
}

function handleBMI(weight, height) {
    console.log(`Weight: ${weight}, Height: ${height}`);

    const heightMts = height / 100;
    const heightSqd = heightMts ** 2;

    const bmi = weight / heightSqd;
    return bmi;
};

function main() {
    const bmi = handleBMI(weightQuestion, heightQuestion);
    console.log(`BMI: ${bmi.toFixed(2)}. Categoria: ${categoryBMI(bmi)}`);
}

main();