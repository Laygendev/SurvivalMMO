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
    that.currentAnimation = options.currentAnimation;
    that.pos              = options.pos;
    that.origin           = options.origin || { x: 0, y: 0};
    numberOfFrames = that.animations[that.currentAnimation].numberOfFrames;
    
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
        
        that.context.drawImage(
            that.image,
            that.animations[that.currentAnimation].images[frameIndex].x,
            that.animations[that.currentAnimation].images[frameIndex].y,
            that.animations[that.currentAnimation].images[frameIndex].width,
            that.animations[that.currentAnimation].images[frameIndex].height,
            that.pos.x + that.origin.x,
            that.pos.y + that.origin.y,
            that.animations[that.currentAnimation].images[frameIndex].width,
            that.animations[that.currentAnimation].images[frameIndex].height);
    };
    
    return that;
}