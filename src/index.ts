import {Graph} from './math/graph'

const myCanvas: any = document.getElementById('myCanvas');
console.log(myCanvas)
  myCanvas.height = 600;
  myCanvas.width = 600;
    const p1 = new Point(200,200);
    const p2 = new Point(300,400);
    const p3 = new Point(400,300);
    const p4 = new Point(500,100);

    const ctx = myCanvas.getContext('2d')
    const graph = new Graph([p1,p2,p3,p4]);

    graph.draw(ctx);
