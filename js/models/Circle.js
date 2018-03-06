class Circle extends Shape {
  constructor() {
    super();
  }
  calculateMoves(){
    this.x = this.x + Math.cos(this.a);
    this.y = this.y + Math.sin(this.a);
  }
  calculateChangeDirection(maxWidth, maxHeight){
    if((this.y - this.r <= 0 || maxHeight < this.y + this.r)){
        this.a = this.a * (-1);    }
    if((this.x < this.r || maxWidth - this.r < this.x)){
        this.a = this.a * (-1) + Math.PI;
    }
  }
  draw(ctx){
    ctx.arc(this.x, this.y, this.r ,0 , 2 * Math.PI);
    ctx.fillStyle = circleColorFill;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = circleColor;
    ctx.stroke();
    return ctx;
  }
}
