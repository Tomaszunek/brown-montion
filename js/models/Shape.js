var Shape = class Shape {
  constructor() {
    this.x = getRandomInt(20, canvasWidth - 20);
    this.y = getRandomInt(20, canvasHeight - 20);
    this.r = getRandomInt(5, 10);
    this.a = getRandomFloat(-Math.PI, Math.PI);
  }
  calculateDist(shape){
    return Math.sqrt(
      ((this.x - shape.x) * (this.x - shape.x)) +
      ((this.y - shape.y) * (this.y - shape.y)));
  }
};
