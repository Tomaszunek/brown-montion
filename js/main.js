/*jshint esversion: 6 */
loadParamsUrl();

for(let i = 0; i < inputValues.circleCount.v; i++) {
  circleArray.push(new Circle());
}

setInterval(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.clearRect(0, 0, canvas.width, canvas.height);
  ctx3.clearRect(0, 0, canvas.width, canvas.height);

  if(waves.length > 0){
    ctx3.beginPath();
    for(let i = 0; i <= waves.length - 1; i++){
      let wave = waves[i];
      if(!wave.ended){
        wave.draw(ctx3);
        for(let j = 0; j < inputValues.circleCount.v; j++) {
          if(wave.isInRange(circleArray[j])){
            circleArray[j].a = circleArray[j].a * (-1);
            circleArray[j].x = circleArray[j].x - (wave.r * Math.sign(circleArray[j].a));
            circleArray[j].y = circleArray[j].y - (wave.r * Math.sign(circleArray[j].a));
          }
        }
      }
    }
  }
  for(let i = 0; i < inputValues.circleCount.v; i++) {
    let crl = circleArray[i];
    crl.calculateMoves();
    crl.calculateChangeDirection(canvasWidth, canvasHeight);
    ctx2.beginPath();
    ctx.beginPath();
    for(let j = i; j < inputValues.circleCount.v; j++) {
      let crlNext = circleArray[j];
      let line = new Line();
      line.draw(ctx2, crl, crlNext);
    }
    crl.draw(ctx);
  }
}, inputValues.frameRate.v);
