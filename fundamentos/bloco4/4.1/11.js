
let salarioBruto = 20000;
let impostoDeRenda;
let iNsS;
let salarioLiquido;
let aliquotaOito;
let aliquotaNove;
let aliquotaOnze;
let aliquotaMaxima;


if (salarioBruto <= 1556.94) {
    iNsS = 0.08 * salarioBruto;
    aliquotaOito = iNsS
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    iNsS = 0.09 * salarioBruto;
}
else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
    iNsS = 0.11 * salarioBruto;
}
else if (5189.82 < salarioBruto) {
    iNsS = (570.88);
}
    console.log(iNsS);