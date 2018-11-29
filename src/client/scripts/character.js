function createCharacter() {
    loadJSON('assets/json/animation/character.json', function(data) {
        var pos = isoToScreen(11, -1);
        hero = sprite({
            context: document.getElementById('main').getContext('2d'),
            width: 1,
            height: 68,
            image: assets[2],
            animations: data,
            loop: true,
            ticksPerFrame: 6,
            currentAnimation: 'idle',
            pos: pos,
            origin: {
              x: 7,
              y: -47
            }
        });
        
        var astar = new Astar();
        astar.findPath(isoToScreenNormal(11, -1), isoToScreenNormal(18, 5));
        console.log(astar.pathToGoal)
    });
}

document.getElementById('main').addEventListener('mousemove', function(evt) {
  var x = evt.offsetX;
  var y = evt.offsetY;
  
  posCursor.x = x;
  posCursor.y = y;
});