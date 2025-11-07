/**** Escreva o código abaixo 👇******/
function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return a / b;
}

function calcularMedia(...numeros) {
  if (numeros.length === 0) {
    throw new Error("Forneça ao menos um número!");
  }
  const soma = numeros.reduce((total, n) => total + n, 0);
  return soma / numeros.length;
}

function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
}

function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "par" : "ímpar";
}

function calcularRaizQuadrada(numero) {
  if (numero < 0) {
    throw new Error("Número negativo não possui raiz real!");
  }
  return Math.sqrt(numero);
}

function calcularHipotenusa(cateto1, cateto2) {
  return Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
}

/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
