const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

async function main() {
    try {
        const data = await fs.readFile(nomeDoArquivo, 'utf8');
        console.log(data);
    } catch (err) {
        console.log(`Erro ao ler o arquivo: ${err.message}`);
    }
}

main();