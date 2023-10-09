class Segment {
  p1: Point;
  p2: Point;
  
  constructor(p1:Point, p2:Point) {
    this.p1 = p1;
    this.p2 = p2;
  }

  draw(ctx, width = 2, color = "black") {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.stroke = color;
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lintTo(this.p2.x, this.p2.y);
    ctx.stroke();
  }
}