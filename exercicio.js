1001

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A=parseInt(lines.shift())
var B=parseInt(lines.shift())

console.log("X = "+ (A+B))
1002

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var raio=parseFloat(lines.shift())
var area=parseFloat(lines.shift())

area = 3.14159 * raio * raio

console.log("A="+area.toFixed(4))
1003


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A=parseInt(lines.shift())
var B=parseInt(lines.shift())

console.log("SOMA = "+(A+B))
 1004

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor1 = parseInt (lines.shift());
let valor2 = parseInt (lines.shift());
var prod = valor1 * valor2;

console.log("PROD = "+prod);
 1005

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let A = parseFloat (lines.shift());
let B = parseFloat (lines.shift());

var mediaA = A * 3.5;
var mediaB = B * 7.5;
var mediaFinal = (mediaA + mediaB) /11;

console.log("MEDIA =", mediaFinal.toFixed(5));
 1006

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat (lines.shift());
let B = parseFloat (lines.shift());
let C = parseFloat (lines.shift());

var mediaA = A * 2;
var mediaB = B * 3;
var mediaC = C * 5;

var mediaFinal = (mediaA + mediaB + mediaC) /10;

console.log("MEDIA =", mediaFinal.toFixed(1));
 1007

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt (lines.shift());
let B = parseInt (lines.shift());
let C = parseInt (lines.shift());
let D = parseInt (lines.shift());

var diferenca = (A * B) - (C * D);

console.log("DIFERENCA =", diferenca);
 1008

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let numeroFunc = parseInt(lines.shift());
let horas = parseInt(lines.shift());
let valorPorHora = parseFloat(lines.shift());

let salary = horas * valorPorHora;

console.log(NUMBER = ${numeroFunc});
console.log(SALARY = U$ ${salary.toFixed(2)});
 1009

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nomeVend = parseInt(lines.shift());
let salarioFix = parseFloat(lines.shift());
let totalVend = parseFloat(lines.shift());

let totalFinal = (salarioFix + totalVend * 0.15);

console.log(TOTAL = R$ ${totalFinal.toFixed(2)});
 1010

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let Peca_1 = lines.shift().split(" ");
let Peca_2 = lines.shift().split(" ");

let numPeca_1 = parseInt(Peca_1.shift());
let qtdPeca_1 = parseInt(Peca_1.shift());
let precoPeca_1 = parseFloat(Peca_1.shift());
1111
let numPeca_2 = parseInt(Peca_2.shift());
let qtdPeca_2 = parseInt(Peca_2.shift());
let precoPeca_2 = parseFloat(Peca_2.shift());

let valor = (qtdPeca_1 * precoPeca_1) + (qtdPeca_2 * precoPeca_2);

console.log(VALOR A PAGAR: R$ ${valor.toFixed(2
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let raio=parseFloat(lines.shift())
let volume = (4/3.0) * 3.14159 * raio * raio * raio;

console.log("VOLUME = "+volume.toFixed(3));
 1112

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159;

let [A, B, C] = lines.shift().split(" ").map((x) => parseFloat(x));

const areaTriangulo = (A * C) / 2;
const areaCirculo = PI * C * C;
const areaTrapezio = ((A + B) / 2) * C;
const areaQuadrado = B * B;
const areaRetangulo = A * B;

console.log(TRIANGULO: ${areaTriangulo.toFixed(3)});
console.log(CIRCULO: ${areaCirculo.toFixed(3)});
console.log(TRAPEZIO: ${areaTrapezio.toFixed(3)});
console.log(QUADRADO: ${areaQuadrado.toFixed(3)});
console.log(RETANGULO: ${areaRetangulo.toFixed(3)});
 1113

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159;

let [A, B, C] = lines.shift().split(" ").map((x) => parseFloat(x));

const areaTriangulo = (A * C) / 2;
const areaCirculo = PI * C * C;
const areaTrapezio = ((A + B) / 2) * C;
const areaQuadrado = B * B;
const areaRetangulo = A * B;

console.log(TRIANGULO: ${areaTriangulo.toFixed(3)});
console.log(CIRCULO: ${areaCirculo.toFixed(3)});
console.log(TRAPEZIO: ${areaTrapezio.toFixed(3)});
console.log(QUADRADO: ${areaQuadrado.toFixed(3)});
console.log(RETANGULO: ${areaRetangulo.toFixed(3)});
1114

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let Y = parseFloat(lines.shift());

let consumo = (X / Y).toFixed(3);

console.log(consumo + ' km/l');
1015

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let p1 = lines.shift().split(" ");
let p2 = lines.shift().split(" ");

let x1 = parseFloat(p1.shift());
let y1 = parseFloat(p1.shift());

let x2 = parseFloat(p2.shift());
let y2 = parseFloat(p2.shift());

let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(distancia.toFixed(4));
 1016

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//x = 60 
//y =90
let entrada = parseInt(lines.shift());
entrada *= 2;

console.log(${entrada} minutos);