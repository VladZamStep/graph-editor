import { Graph } from './math/graph'
import { GraphEditor } from './math/graphEditor';
import Viewport from './math/viewport';
import { Point } from './primitives/point'
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
