
function loadImg() {
    var assetsLoad = [
        "assets/tilemap/64/isometric_64_0000.png",
        "assets/tilemap/64/isometric_64_0001.png",
        "assets/character/unicorn_atlas.png"
    ],
    assetsLoaded = 0;

  for (var i = 0; i < assetsLoad.length; i++) {
    assets[i] = new Image();
    assets[i].src = assetsLoad[i];
    
    assets[i].onload = function() {
      assetsLoaded++;
      if (assetsLoaded === assetsLoad.length) {
          drawMap();
          createCharacter();
      }
    }
  }
}