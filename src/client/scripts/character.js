function createCharacter() {
    loadJSON('assets/json/animation/character.json', function(data) {
        hero = sprite({
            context: document.getElementById('main').getContext('2d'),
            width: 1,
            height: 68,
            image: assets[2],
            animations: data,
            loop: true,
            ticksPerFrame: 6,
            currentAnimation: 'idle',
            pos: {
              x: 0,
              y: 0
            }
        });
    });
}

document.getElementById('main').addEventListener('mousemove', function(evt) {
  var x = evt.offsetX;
  var y = evt.offsetY;
  console.log(x,y);
  
  posCursor.x = x;
  posCursor.y = y;
});