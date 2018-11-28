function createCharacter() {
    loadJSON('assets/json/animation/character.json', function(data) {
        hero = sprite({
            context: document.getElementById('main').getContext('2d'),
            width: 90,
            height: 180,
            image: assets[2],
            animations: data,
            numberOfFrames: 6,
            loop: true,
            ticksPerFrame: 6
        });
    });
}