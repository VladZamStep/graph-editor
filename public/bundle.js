(()=>{"use strict";var __webpack_modules__={302:()=>{eval("\n;// CONCATENATED MODULE: ./src/math/graph.ts\nclass Graph {\n    constructor(points = [], segments = []) {\n        this.points = points;\n        this.segments = segments;\n    }\n    draw(ctx) {\n        for (let seg of this.segments) {\n            seg.draw(ctx);\n        }\n        for (let point of this.points) {\n            point.draw(ctx);\n        }\n    }\n}\n\n;// CONCATENATED MODULE: ./src/index.ts\n\nconst myCanvas = document.getElementById('myCanvas');\nconsole.log(myCanvas);\nmyCanvas.height = 100;\nmyCanvas.width = 600;\nconst p1 = new Point(200, 200);\nconst p2 = new Point(300, 400);\nconst p3 = new Point(400, 300);\nconst p4 = new Point(500, 100);\nconst ctx = myCanvas.getContext('2d');\nconst graph = new Graph([p1, p2, p3, p4]);\ngraph.draw(ctx);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAyLmpzIiwibWFwcGluZ3MiOiI7O0FBQU8sTUFBTSxLQUFLO0lBSWhCLFlBQVksTUFBTSxHQUFHLEVBQUUsRUFBRSxRQUFRLEdBQUcsRUFBRTtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQUc7UUFDTixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmO1FBQ0QsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7SUFDSCxDQUFDO0NBQ0Y7OztBQ2pCaUM7QUFFbEMsTUFBTSxRQUFRLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNuQixRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUN0QixRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNuQixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUM5QixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFFOUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXZDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFwaC1lZGl0b3IvLi9zcmMvbWF0aC9ncmFwaC50cz9hOWI3Iiwid2VicGFjazovL2dyYXBoLWVkaXRvci8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHcmFwaCB7XG4gIHBvaW50czogYW55W107XG4gIHNlZ21lbnRzOiBhbnlbXTtcbiAgXG4gIGNvbnN0cnVjdG9yKHBvaW50cyA9IFtdLCBzZWdtZW50cyA9IFtdKSB7XG4gICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG4gICAgdGhpcy5zZWdtZW50cyA9IHNlZ21lbnRzO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBmb3IgKGxldCBzZWcgb2YgdGhpcy5zZWdtZW50cykge1xuICAgICAgc2VnLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgZm9yIChsZXQgcG9pbnQgb2YgdGhpcy5wb2ludHMpIHtcbiAgICAgIHBvaW50LmRyYXcoY3R4KTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQge0dyYXBofSBmcm9tICcuL21hdGgvZ3JhcGgnXG5cbmNvbnN0IG15Q2FudmFzOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDYW52YXMnKTtcbmNvbnNvbGUubG9nKG15Q2FudmFzKVxuICBteUNhbnZhcy5oZWlnaHQgPSAxMDA7XG4gIG15Q2FudmFzLndpZHRoID0gNjAwO1xuICAgIGNvbnN0IHAxID0gbmV3IFBvaW50KDIwMCwyMDApO1xuICAgIGNvbnN0IHAyID0gbmV3IFBvaW50KDMwMCw0MDApO1xuICAgIGNvbnN0IHAzID0gbmV3IFBvaW50KDQwMCwzMDApO1xuICAgIGNvbnN0IHA0ID0gbmV3IFBvaW50KDUwMCwxMDApO1xuXG4gICAgY29uc3QgY3R4ID0gbXlDYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNvbnN0IGdyYXBoID0gbmV3IEdyYXBoKFtwMSxwMixwMyxwNF0pO1xuXG4gICAgZ3JhcGguZHJhdyhjdHgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///302\n")}},__webpack_exports__={};__webpack_modules__[302]()})();