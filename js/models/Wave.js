class Wave extends Effect {
  constructor(x, y) {
    super(x, y);
    this.r = getRandomInt(5, 10);
    this.ended = false;
  }
  makeHigherRadius(){
    this.r = this.r + 8;
  }
  isInRange(clr){
    if(Math.sqrt(
      ((this.x - clr.x) * (this.x - clr.x)) +
      ((this.y - clr.y) * (this.y - clr.y))) < this.r){
        return true;
    } else{
      return false;
    }
  }
  draw(ctx){
    if(this.r > 250){
      this.ended = true;
    } else {
      ctx.arc(this.x, this.y, this.r , 0 , 2*Math.PI);
      ctx.lineWidth = 8;
      ctx.strokeStyle = circleColor;
      ctx.stroke();
      this.makeHigherRadius();
    }
  }
}
