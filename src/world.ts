import { Graph } from "./math/graph";
import { add, scale } from "./math/utils";
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
  buildingWidth: number;
  buildingMinLength: number;
  spacing: number;
  buildings: any[];
  constructor(graph,
    roadWidth = 100,
    roadRoundNess = 10,
    buildingWidth = 150,
    buildingMinLength = 150,
    spacing = 50,
  ) {
    this.graph = graph;
    this.roadWidth = roadWidth
    this.roadRoundNess = roadRoundNess;

    this.buildingWidth = buildingWidth;
    this.buildingMinLength = buildingMinLength;
    this.spacing = spacing;

    this.envelopes = [];
    this.roadBorders = [];
    this.buildings = [];
  
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
    this.buildings = this.#generateBuildings();
  };

  #generateBuildings() {
    const tempEnvelopes = [];
    for (const seg of this.graph.segments) {
      tempEnvelopes.push(
        new Envelope(
          seg,
          this.roadWidth + this.buildingWidth + 2 * this.spacing,
          this.roadRoundNess,
        )
      )
    };
    const guides = Polygon.union(tempEnvelopes.map((t) => t.poly));

    for (let i = 0; i < guides.length; i++){
      
      const seg = guides[i];
      if (seg.length() < this.buildingMinLength) {
        guides.splice(i, 1);
        i--;
      }
    }

    const supports = [];
    for (let seg of guides) {
      const len = seg.length() + this.spacing;
      const buildingCount = Math.floor(
        len / (this.buildingMinLength + this.spacing)
      );
      const buildingLength = len / buildingCount - this.spacing;
      const dir = seg.directionVector();

      let q1 = seg.p1;
      let q2 = add(q1, scale(dir, buildingLength));
      supports.push(new Segment(q1, q2));

      for (let i = 2; i < buildingCount; i++){
        q1 = add(q2, scale(dir, this.spacing));
        q2 = add(q1, scale(dir, buildingLength));
        supports.push(new Segment(q1, q2));
      }
    }

    const bases: Polygon[] = [];
    for (const seg of supports) {
      bases.push(new Envelope(seg, this.buildingWidth).poly);
    }

    for (let i = 1; i < bases.length - 1; i++){
      for (let j = i + 1; j < bases.length; j++){
        if (bases[i].intersectsPoly(bases[j])) {
          bases.splice(j, 1);
          j--;
        }
      }
    }
    return bases;
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
    for (const temp of this.buildings) {
      temp.draw(ctx);
    }
  }
}

export default World;