
function loadImg() {
    var tileGraphicsToLoad = [
        "assets/tilemap/64/isometric_64_0000.png",
        "assets/tilemap/64/isometric_64_0001.png"
    ],
    tileGraphicsLoaded = 0;

  for (var i = 0; i < tileGraphicsToLoad.length; i++) {
    tileGraphics[i] = new Image();
    tileGraphics[i].src = tileGraphicsToLoad[i];
    
    tileGraphics[i].onload = function() {
      tileGraphicsLoaded++;
      if (tileGraphicsLoaded === tileGraphicsToLoad.length) {
          drawMap();
      }
    }
  }
}