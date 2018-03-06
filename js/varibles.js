const canvasWidth = 1700;
const canvasHeight = 983;
const cicleCount = 100;
const frameRate = 1000/60;

const canvas = document.getElementById("canvas");
const canvas2 = document.getElementById("canvas2");
const canvas3 = document.getElementById("canvas3");

canvas.width = canvasWidth;
canvas.height = canvasHeight;
canvas2.width = canvasWidth;
canvas2.height = canvasHeight;
canvas3.width = canvasWidth;
canvas3.height = canvasHeight;

var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");
var ctx3 = canvas3.getContext("2d");

let circleColor = '#f2d7ee';
let nearLineColor = '#f2d7ee';
let farLineColor = '#ce84c3';
let circleColorFill  = 'black';

let colorPalet = [];
let urlParams = [];
let inputValues = [];
let circleArray = [];
let waves = [];

let board = new Board();

inputValues.circleCount = {'parName' : 'staticValue', 'v' : cicleCount};
inputValues.frameRate = {'parName' : 'staticValue', 'v' : frameRate};
