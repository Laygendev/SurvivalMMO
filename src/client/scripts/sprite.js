function sprite (options) {
    var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1;
        
    that.context    = options.context;
    that.width      = options.width;
    that.height     = options.height;
    that.image      = options.image;
    that.animations = options.animations;
    that.loop       = options.loop;
    that.currentAnimation = 'walk_right_back';
    
    console.log(that.animations);
    
    that.update = function() {
        tickCount += 1;
        
        if (tickCount > ticksPerFrame) {
            tickCount = 0;
            
            if (frameIndex < numberOfFrames -1) {
                frameIndex += 1;
            } else if (that.loop) {
                frameIndex = 0;
            }
            
        }
    };
    
    that.render = function() {
        that.context.clearRect(0, 0, that.width, that.height);
        
        that.context.drawImage(
            that.image,
            that.animations[ that.currentAnimation + '_' + frameIndex ].x,
            that.animations[ that.currentAnimation + '_' + frameIndex ].y,
            that.animations[ that.currentAnimation + '_' + frameIndex ].width,
            that.animations[ that.currentAnimation + '_' + frameIndex ].height,
            0,
            0,
            that.animations[ that.currentAnimation + '_' + frameIndex ].width,
            that.animations[ that.currentAnimation + '_' + frameIndex ].height);
    };
    
    return that;
}