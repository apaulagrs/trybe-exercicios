// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// // Uma resposta correta adiciona 1 ponto à pontuação final;
// // A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// // Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const correctAnswer = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswer = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const myFunction = (correctAnswer, studentAnswer, check) => {
    return check();
};

const check = () => {
    let pontuation = 0;
    for (let i = 0; i < correctAnswer.length; i += 1) {
        for (let index = 0; index < studentAnswer.length; index += 1) {
            if (index === i) {
                if (studentAnswer[index] === correctAnswer[i]) {
                    pontuation += 1;
                } else if (studentAnswer[index] === 'N.A') {
                    pontuation = pontuation;
                } else if (studentAnswer[index] !== correctAnswer[i]) {
                    pontuation = pontuation - 0.5;
                }
            }
        }
    }
    return `Você tirou nota ${pontuation} na avaliação.`;
}

console.log(myFunction(correctAnswer, studentAnswer, check));
