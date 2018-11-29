class Astar {
  constructor() {
    this.initialized = false;
    this.foundGoal = false;
    this.openList = [];
    this.visitedList = [];
    this.pathToGoal = [];
    this.startCell = new Cell();
    this.goalCell = new Cell();
  }
  
  findPath(currentPos, targetPos) {
    var start = new Cell();
    start.pos.x = currentPos.x;
    start.pos.y = currentPos.y;
    
    var goal = new Cell();
    goal.pos.x = currentPos.x;
    goal.pos.y = currentPos.y;
    
    this.setStartAndGoal(start, goal);
    
    this.initialized = true;
    
    if(this.initialized) {
  		this.ContinuePath();
  	}
  }
  
  setStartAndGoal(start, goal) {
    this.startCell.pos = start.pos;
    this.startCell.cell.x = start.pos / tileW;
    this.startCell.cell.y = start.pos / tileH;
    this.startCell.parent = 0;
    this.startCell.id = parseInt((start.pos.y * tileH) + start.pos.x);
    
    this.goalCell.pos = goal.pos;
    this.goalCell.cell.x = goal.pos / tileW;
    this.goalCell.cell.y = goal.pos / tileH;
    this.goalCell.parent = goal;
    this.goalCell.id = parseInt((goal.pos.y * tileH) + goal.pos.x);
    
    this.startCell.h = this.startCell.ManHattanDistance(this.goalCell);
    
    this.openList.push(this.startCell);
  }
  
  GetNextCell() {
    let bestF = 999999.0;
    let cellIndex = -1;
    let i = 0;
    
    for (var key in this.openList) {
      var cellF = this.openList[key].GetF();
      if ( cellF < bestF) {
        bestF = cellF;
        cellIndex = i;
      }
      i++;
    }
    
    var nextCell = new Cell();
    if (cellIndex >= 0) {
      nextCell = this.openList[cellIndex];
      this.visitedList.push(nextCell);
      this.openList.splice(i, 1);
    }
    
    return nextCell;
  }
  
  PathOpened(cellX, cellY, newCost, parent) {
    var posX = cellX * tileW;
    var posY = cellY * tileH;
    
    if (map[cellX][cellY] == 1) return;
    if (cellX < 0) return;
    if (cellX > map.length) return;
    if (cellY < 0) return;
    if (cellY > map.length) return;
    
    var id = parseInt((cellY * tileH) + cellX);
    
    for (var key in this.visitedList) {
      if (id == this.visitedList[key].id) {
        return;
      }
    }
    
    var newChild = new Cell();
    newChild.pos.x = posX;
    newChild.pos.y = posY;
    newChild.cell.x = cellX;
    newChild.cell.y = cellY;
    newChild.parent = parent;
    newChild.g = newCost;
    newChild.h = parent.ManHattanDistance(this.goalCell);
    
    for (var key in this.openList) {
      if (id == this.openList[key].id) {
        var newF = newChild.g + newCost + this.openList[key].h;
        
        if (this.openList[key].getF() > newF) {
          this.openList[key].g = newChild.g + newCost;
          this.openList[key].parent = newChild;
        } else {
          return;
        }
      }
    }
    
    this.openList.push(newChild);
  }
  
  ContinuePath() {
    if (this.openList.length == 0) {
      return;
    }
    
    var currentCell = this.GetNextCell();
    
    if (currentCell.id == this.goalCell.id) {
      this.goalCell.parent = currentCell.parent;
      var getPath = this.goalCell;
      
      for (getPath = this.goalCell; getPath != 0; getPath = getPath.parent) {
        this.pathToGoal.push({
          x: isoToScreen(getPath.cell.x, getPath.cell.y).x,
          y: isoToScreen(getPath.cell.x, getPath.cell.y).y
        });
      }
      
      this.foundGoal = true;
      return;
    } else {
      var cellX = parseInt(currentCell.pos.x) / tileW;
      var cellY = parseInt(currentCell.pos.h) / tileH;
      
      this.PathOpened(cellX, cellY + 1, currentCell.g, currentCell);
      this.PathOpened(cellX + 1, cellY, currentCell.g, currentCell);
      this.PathOpened(cellX - 1, cellY, currentCell.g, currentCell);
      this.PathOpened(cellX, cellY - 1, currentCell.g, currentCell);
      
      var i = 0;
      
      for (var key in this.openList) {
        if (this.openList[key].id == currentCell.id) {
          this.openList.splice(i, 1);
        }
        
        i++;
      }
    }
    
    this.ContinuePath();
  }
  
  
}