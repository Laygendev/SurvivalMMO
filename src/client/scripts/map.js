var map = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

var tileH = 58;
var tileW = 50;
var halfTileH = tileH / 2;
var halfTileW = tileW / 2;

function drawMap() {
    var ctx = document.getElementById('main').getContext('2d');

  
    var mapX = 0;
    var mapY = 0;

    var drawTile;

    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            drawTile = map[i][j];
            
            ctx.drawImage(assets[drawTile], (i - j) * halfTileW + mapX, (i + j) * halfTileH / 2 + mapY);
        }
    }
}

function screenToIso (screenX, screenY) {
    var cellX = Math.round(screenY / tileH + screenX / tileW);
    var cellY = Math.round(screenY / tileH - screenX / tileW);
    
    console.log(screenX, screenY);

    return {
      cellX: cellX,
      cellY: cellY
    };
  }
  
function isoToScreen (isoX, isoY) {
  var posX = parseInt((isoX - isoY) * tileW / 2);
  var posY = parseInt((isoX + isoY) * tileH / 2);
  
  return {
    x: posX,
    y: posY
  };
}