import { Graph } from './math/graph'
import { Point } from './primitives/point'
import { Segment } from './primitives/segment';

const canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
const addBtn = document.getElementById('addBtn');
const addSegmentBtn = document.getElementById('addSegmentBtn');
const removeSegmentBtn = document.getElementById('removeSegmentBtn');
const removePointBtn = document.getElementById('removePointBtn');
const clearBtn = document.getElementById('clearBtn');

canvas.height = 600;
canvas.width = 600;

const p1 = new Point(200, 200);
const p2 = new Point(300, 400);
const p3 = new Point(400, 300);
const p4 = new Point(500, 100);

const s1 = new Segment(p1, p2);
const s2 = new Segment(p3, p4);
const s3 = new Segment(p2, p3);
const s4 = new Segment(p3, p1);

const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
const graph = new Graph([p1, p2, p3, p4],[s1,s2,s3,s4]);
console.log(graph);
graph.draw(ctx);

function addRandomPoint() {
  graph.tryAddPoint(
    new Point(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
    )
  )
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  graph.draw(ctx);
};

function addRandomSegment() {
  const index1 = Math.floor(Math.random() * graph.points.length);
  const index2 = Math.floor(Math.random() * graph.points.length);
  graph.tryAddSegment(
    new Segment(graph.points[index1], graph.points[index2])
  );
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  graph.draw(ctx);
};

function removeSegments() {
  if (!graph.segments.length) {
    console.log('no segments');
    return;
  }
  const index = Math.floor(Math.random() * graph.segments.length);
  graph.removeSegment(graph.segments[index]);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  graph.draw(ctx);
}

function removePoint() {
  if (!graph.points.length) {
    console.log('no points');
    return;
  }
  const index = Math.floor(Math.random() * graph.points.length);
  graph.removePoint(graph.points[index]);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  graph.draw(ctx);
}

function clearCanvas(){
  graph.dispose();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  graph.draw(ctx);
}

addBtn.addEventListener('click', addRandomPoint);
addSegmentBtn.addEventListener('click', addRandomSegment);
removeSegmentBtn.addEventListener('click', removeSegments);
removePointBtn.addEventListener('click', removePoint);
clearBtn.addEventListener('click', clearCanvas);
