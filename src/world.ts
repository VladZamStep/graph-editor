import { Graph } from "./math/graph";
import Envelope from "./primitives/envelope";
import { Point } from "./primitives/point";
import Polygon from "./primitives/polygon";
import { Segment } from "./primitives/segment";

class World {
  roadWidth?: number;
  roadRoundNess?: number;
  graph: Graph;
  envelopes: Envelope[];
  intersections: Point[];
  roadBorders: Segment[];
  constructor(graph, roadWidth = 100, roadRoundNess = 10) {
    this.graph = graph;
    this.roadWidth = roadWidth
    this.roadRoundNess = roadRoundNess;

    this.envelopes = [];
    this.roadBorders = [];
    this.generate();
  }

  generate() {
    this.envelopes.length = 0;
    for (const seg of this.graph.segments) {
      this.envelopes.push(
        new Envelope(seg, this.roadWidth, this.roadRoundNess)
      );
    };

    this.roadBorders = Polygon.union(this.envelopes.map((e) => e.poly));
  };

  draw(ctx: CanvasRenderingContext2D) {
    for (const env of this.envelopes) {
      env.draw(ctx, { fill: '#BBB', stroke: '#BBB', lineWidth: 20});
    }
    for (const seg of this.graph.segments) {
      seg.draw(ctx, { color: 'white', width: 4, dash: [10, 10] });
    }
    for (const seg of this.roadBorders) {
      seg.draw(ctx, { color: 'white', width: 4})
    }
  }
}

export default World;