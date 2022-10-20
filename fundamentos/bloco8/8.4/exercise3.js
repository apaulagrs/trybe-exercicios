// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

// const expectedResult = 20;

function containsA() {
    return names.forEach((e) => {
        const element = [e.split('')];
        element.reduce((acc, curr) => {
            acc = 0;
            if (curr === 'a') {
                return acc + 1
            };
            return acc;
        }, 0)
    });
}

console.log(containsA());
