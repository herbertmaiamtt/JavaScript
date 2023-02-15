// var, let, const
//var -> ES5 - cross-browser
// let e const -> ES2015

//let teste = "minha string"; // let não permite criar duas variáveis com o mesmo nome, já var, sim.
//const teste2 = 10; // Não é possível reatribuir um valor para uma variável const.

let minhaVar = "minha string";
let $var_ = 10; // permitido criar variáveis com $ ou _ no início do nome
let minhavar2 = 'minha "string" com aspas duplas';
var minhavar3 = 'minha template literal';

let idade = 40;
//let msg = "eu possuo " + idade + " anos de idade";
let msg = `eu possuo ${idade} anos`; // !!!!!preferível esse modelo

console.log(msg);
console.log(typeof msg, typeof idade, typeof minhaVar, "oi");

const n1 = 10;
const n2 = 1.1;
console.log(`\no tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);
// seja inteiro ou flutuante, o tipo é sempre "number"


const isValid = true;
console.log(`\nisValide: ${isValid}`);

//tipos: strings, number (int, float), boolean, undefined, null, symbol (ES2015)

let varTeste;
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(typeof varTeste, varTeste);

// "==" mesmo valor
// "===" mesmo valor e tipo

