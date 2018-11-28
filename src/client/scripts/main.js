var assets = [];
var hero = null;
var hero2 = null;

var posCursor = {
  x: 0,
  y: 0
};

function main() {
    loadImg();
    loop();
}

function loop() {
    window.requestAnimationFrame(loop);

    document.getElementById('main').getContext('2d').clearRect(0, 0, 800, 600);
    
    var cellPos = screenToIso(posCursor.x, posCursor.y);
    var screenCellPos = isoToScreen(cellPos.cellX, cellPos.cellY);
    
    drawMap();
      document.getElementById('main').getContext('2d').drawImage(assets[3], screenCellPos.x, screenCellPos.y);
    if (hero) {
      hero.update();
      hero.render();
    }

    
}

(function() {
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	// MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

document.addEventListener( 'DOMContentLoaded', main );

