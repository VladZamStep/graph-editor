import { Graph } from './math/graph'
import { GraphEditor } from './math/graphEditor';
import Viewport from './math/viewport';
import Envelope from './primitives/envelope';
import { Point } from './primitives/point'
import Polygon from './primitives/polygon';
import { Segment } from './primitives/segment';

const canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');

canvas.height = 600;
canvas.width = 600;

const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const graphString = localStorage.getItem('graph');
const graphInfo = graphString ? JSON.parse(graphString) : null;
const graph = graphInfo
  ? Graph.load(graphInfo)
  : new Graph();
const viewport = new Viewport(canvas);
const graphEditor = new GraphEditor(viewport, graph);
animate();

function animate() {
  viewport.reset();
  graphEditor.display();
  // new Polygon(graph.points).draw(ctx);
  new Envelope(graph.segments[0],80).draw(ctx);
  requestAnimationFrame(animate);
}
console.log(graph);
graph.draw(ctx);

function dispose() {
  graphEditor.dispose();
}

function save() {
  localStorage.setItem('graph', JSON.stringify(graph));
}

clearBtn.addEventListener('click', dispose);
saveBtn.addEventListener('click', save);
