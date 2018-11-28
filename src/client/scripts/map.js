var map = [
    [1,0,0,0],
    [1,0,0,1],
    [0,0,1,1],
    [1,1,1,1]
];

function drawMap() {
    var ctx = document.getElementById('main').getContext('2d');
    var tileH = 32;
    var tileW = 28;
  
    var mapX = 100;
    var mapY = 100;

    var drawTile;

    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            drawTile = map[i][j];
            ctx.drawImage(assets[drawTile], (i - j) * tileW + mapX, (i + j) * tileH / 2 + mapY);
        }
    }
}