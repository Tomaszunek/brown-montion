function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
    return (Math.random() * (max - min + 1)) + min;
}

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return {r : r, g : g, b : b};
}

function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B);}
function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
}

function calculateColor() {
  colorPalet[0] = nearLineColor;
  colorPalet[7] = farLineColor;
  let tempNear = hexToRgb(nearLineColor.slice(1, nearLineColor.length));
  let tempFar = hexToRgb(farLineColor.slice(1, farLineColor.length));
  for(let i = 1; i < 7; i++){
    let rd = Math.abs(tempNear.r - tempFar.r)/8;
    let gd = Math.abs(tempNear.g - tempFar.g)/8;
    let bd = Math.abs(tempNear.b - tempFar.b)/8;
    colorPalet[i] = '#' + rgbToHex(
      Math.min(tempNear.r, tempFar.r) + rd * i,
      Math.min(tempNear.g, tempFar.g) + gd * i,
      Math.min(tempNear.b, tempFar.b) + bd * i);
  }
}calculateColor();

var getParams = function (url) {
   var params = {};
   var parser = document.createElement('a');
   parser.href = url;
   var query = parser.search.substring(1);
   var vars = query.split('&');
   for (var i = 0; i < vars.length; i++) {
     var pair = vars[i].split('=');
     params[pair[0]] = decodeURIComponent(pair[1]);
   }
   return params;
 };

 function loadParamsUrl() {
    let queryParam = getParams(window.location.search);
    for(let i in queryParam){
      if(i != ""){
        inputValues[i] =  {'parName' : i, 'v' : queryParam[i]};
      }
    }
  }
function reloadPage() {
   let paramString = '';
   for(let i in inputValues) {
     console.log(i, inputValues);
     paramString += i + '=' + inputValues[i].v + '&';
   }
   console.log(paramString);
   let string = window.location.search.split("?")[0] + '?' + paramString.slice(0, -1);
   window.location.search = window.location.search.split("?")[0] + string;
 }

 canvas3.addEventListener("click", function(event){
   makeWaves(event);
 });
 function makeWaves(ev){
   waves.push(new Wave(ev.clientX, ev.clientY));
 }

 function calculateFunction(shape1, shape2) {
   let functionParam = {a : 1, b : 1};
   if(shape2.y - shape1.y != 0){
     functionParam.a = (shape2.y - shape1.y)/(shape2.x - shape1.x);
     functionParam.b = shape2.y - functionParam.a * shape2.x;
     return functionParam;
   }
   return functionParam;
 }


 function findCircleLineIntersections(r, h, k, m, n) {
   // circle: (x - h)^2 + (y - k)^2 = r^2
  // line: y = m * x + n
  // r: circle radius
  // h: x value of circle centre
  // k: y value of circle centre
  // m: slope
  // n: y-intercept

  // get a, b, c values
  var a = 1 + m * m;
  var b = -h * 2 + (m * (n - k)) * 2;
  var c = h * h + (n - k) - (n - k) - r * r;

  // get discriminant
  var d = b * b - 4 * a * c;
  if (d >= 0) {
      // insert into quadratic formula
      var intersections = [
          (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a),
          (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)
      ];
      if (d == 0) {
          // only 1 intersection
          return [intersections[0]];
      }
      return intersections;
  }
  // no intersection
  return [];
}
