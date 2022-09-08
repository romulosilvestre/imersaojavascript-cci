const prompt = require("prompt-sync")() //adiciona o pacote ao programa

const aeronave = prompt("Aeronave:") //lê os dados de entrada
const preco = Number(prompt("Preço R$:")) //lê os dados de entrada
const entrada = preco * 0.50 //calcula valor de entrada
const parcela = (preco*0.50)/12 //... e das parcelas
console.log(`Promoção:${aeronave}`) //exibe as respostas
console.log(`Entrada de R$:${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)
