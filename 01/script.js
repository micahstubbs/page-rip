var container = d3.select("body");
var article = d3.select("article");
var clone = d3.select(container.node().appendChild(article.node().cloneNode(true)))
  .classed("clone", true);

var touches = [];
var pane = [article, clone];
var panes = 1;
var divider = 0;
var drag = d3.drag()
  .on("start", start)
  .on("drag", drag)
  .on("end", end)

article.call(drag);

function start() {
  var paneIndex = d3.event.y < divider * innerHeight ? 1 : 0
  touches = touches.filter(d => d.alive || d.pane != paneIndex)
  touches.push({
    id: d3.event.identifier,
    y: d3.event.y,
    dy: d3.event.dy,
    alive: true,
    pane: paneIndex
  })
}

function drag() {

  var live = d3.touches(this);
  if(live.length == 2) {
    if(Math.abs(live[0][1] - live[1][1]) > 80) {
      if(panes !== 2) {
        panes = 2;
        pane[1].node().scrollTop = pane[0].node().scrollTop;
        pane[1].classed("alive", true)
      }
      divider = ((live[0][1] + live[1][1]) / 2) / innerHeight
      pane[1].style("height", (divider * 100)+"%")
    } else {
      if(panes !== 1) {
        panes = 1;
        divider = 0;
        pane[1].classed("alive", false)
      }
    }
  }

  var pt = touches[touches.map(d => d.id).indexOf(d3.event.identifier)]
  if(pt) {
    pt.y = d3.event.y
    pt.dy = d3.event.dy
    pt.pane = d3.event.y < divider * innerHeight ? 1 : 0
    pane[pt.pane].node().scrollTop -= pt.dy
  }
}

function end() {
  var pt = touches[touches.map(d => d.id).indexOf(d3.event.identifier)]
  if(pt) {
    pt.alive = false;
  }
}

// d3.timer(function() {
//   console.log(touches)
// })

d3.timer(function() {
  touches = touches.filter(d => d.alive || Math.abs(d.dy) > .01);
  touches.filter(d => !d.alive).forEach(function(d) {
    pane[d.pane].node().scrollTop -= d.dy;
    d.dy = d.dy / 1.05;
  })
})
