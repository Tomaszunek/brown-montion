var Line = class Line {
  constructor() {
  }
  draw(ctx, crl1, crl2){
    let distanceBetweenCircle = crl1.calculateDist(crl2);
    if(distanceBetweenCircle < crl1.r + crl2.r) {
        crl1.a = crl1.a * (-1);
        crl2.a = crl2.a * (-1);
    }
    if(distanceBetweenCircle < 150) {

      let floorDistance = Math.floor(distanceBetweenCircle/25);
      let numberColor = colorPalet[floorDistance];

      ctx.moveTo(crl1.x, crl1.y);
      ctx.lineTo(crl2.x, crl2.y);
      ctx.lineWidth = 7 - Math.abs(floorDistance);
      ctx.strokeStyle = numberColor + (3 + floorDistance) + (3 + floorDistance);
      ctx.stroke();

      return ctx;
    }
    return;
  }
};
