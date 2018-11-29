class Cell {
  constructor() {
    this.id;
    
    this.pos = {
      x: 0,
      y: 0
    };
    
    this.cell = {
      x: 0,
      y: 0
    };
    
    this.g = 0;
    this.h = 0;
  }
  
  GetF() {
    return this.g + this.h;
  }
  
  ManHattanDistance(cellEnd) {
    let x = Math.abs(this.pos.x - cellEnd.pos.x);
    let y = Math.abs(this.pos.y - cellEnd.pos.y);
    
    return x + y;
  }
}