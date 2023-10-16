import { Point } from "../primitives/point";
import { Segment } from "../primitives/segment";
import { Graph } from "./graph";
import { getNearestPoint } from "./utils";

export class GraphEditor{
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  graph: Graph;
  mouse: Point | null;
  selected: Point | null;
  hovered: Point | null;
  dragging: boolean;
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;

    this.ctx = this.canvas.getContext("2d");

    this.selected = null;
    this.hovered = null;
    this.dragging = false;
    this.mouse = null;


    this.#addEventListeners();
  }
  #addEventListeners() {
    this.canvas.addEventListener('mousedown', this.#handleMousedown.bind(this));
    this.canvas.addEventListener('mousemove', this.#handleMousemove.bind(this));
    this.canvas.addEventListener('contextmenu', (evt) => evt.preventDefault());
    this.canvas.addEventListener('mouseup', () => this.dragging = false);
  }

  display() {
    this.graph.draw(this.ctx)
    if (this.hovered) {
      this.hovered.draw(this.ctx, { fill: true })
    }
    if (this.selected) {
      const intent = this.hovered ? this.hovered : this.mouse;
      new Segment(this.selected, intent).draw(this.ctx, { dash: [3,3]});
      this.selected.draw(this.ctx, { outline: true })
    }
  }

  #handleMousedown(evt) {
    if (evt.button == 2) {
      if (this.selected) {
        this.selected = null;
      } else if (this.hovered) {
        this.#removePoint(this.hovered);
      }
    }
    if (evt.button == 0) {
      if (this.hovered) {
        this.#select(this.hovered);
        this.dragging = true;
        return;
      }
      this.graph.tryAddPoint(this.mouse);
      this.#select(this.mouse);
      this.hovered = this.mouse;
    }
  }

  #handleMousemove(evt) {
    this.mouse = new Point(evt.offsetX, evt.offsetY);
      this.hovered = getNearestPoint(this.mouse, this.graph.points, 10);
      if (this.dragging) {
        this.selected.x = this.mouse.x;
        this.selected.y = this.mouse.y;
      }
  }

  #select(point) {
    if (this.selected) {
      this.graph.tryAddSegment(new Segment(this.selected, point));
    }
    this.selected = point;
  }

  #removePoint(point) {
    this.graph.removePoint(point);
    this.hovered = null;
    if (this.selected == point) {
      this.selected = null;
    }
  }


}