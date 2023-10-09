export class Graph {
  points: any[];
  segments: any[];
  
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }

  draw(ctx) {
    for (let seg of this.segments) {
      seg.draw(ctx);
    }
    for (let point of this.points) {
      point.draw(ctx);
    }
  }
}