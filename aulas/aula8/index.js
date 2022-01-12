/* 
Thiago Viana Vieira tem 16 anos, pesa 45kg
tem 1.8 de altura e seu IMC é de (IMC)
Thiago Viana nasceu em 2006
*/
const nome = 'Thiago Viana';
const sobrenome = 'Vieira';
const idade = 16;
const peso = 45;
const altura = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2021 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg`);
console.log(`tem ${altura} e seu imc é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);