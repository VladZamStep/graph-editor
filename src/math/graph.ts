import { Point } from "../primitives/point";
import { Segment } from "../primitives/segment";

export class Graph {
  points: any[];
  segments: any[];
  
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }
  
  static load(info) {
    const points = info.points.map((i)=>new Point(i.x, i.y));
    const segments = info.segments.map((i) => new Segment(
      points.find((p)=>p.equals(i.p1)),
      points.find((p)=>p.equals(i.p2))
    ));
    return new Graph(points, segments);
  }

  private addPoint(point: Point) {
    this.points.push(point);
  }

  containsPoint(point: Point) {
    return this.points.find((p)=>p.equals(point))
  }

  tryAddPoint(point: Point) {
    if (!this.containsPoint(point)) this.addPoint(point);
  }

  addSegment(segment:any) {
    this.segments.push(segment)
  }

  containsSegment(seg: any) {
    return this.segments.find((s) => s.equals(seg));
  }

  tryAddSegment(segment: any) {
    if (!this.containsSegment(segment) && !segment.p1.equals(segment.p2)) this.addSegment(segment);
  }

  removeSegment(seg: any) {
    this.segments.splice(this.segments.indexOf(seg), 1);
  }

  removePoint(point: Point) {
    const segs = this.getSegmentsWithPoint(point);
    for (const seg of segs) {
      this.removeSegment(seg);
    }
    this.points.splice(this.points.indexOf(point), 1);
  }

  getSegmentsWithPoint(point: Point) {
    const segs = [];
    for (const seg of this.segments) {
      if (seg.includes(point)) {
        segs.push(seg);
      }
    }
    return segs;
  }

  dispose() {
    this.points.length = 0;
    this.segments.length = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }
    for (const point of this.points) {
      point.draw(ctx);
    }
  }
}