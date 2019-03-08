function setup(){
  createCanvas(400,400);
  cellSize = width/5;
}

function draw(){
  background(100);

  for(i=0;i<cellSize;i++){
    for(j=0;j<cellSize;j++){
      cells(i,j);
    }
  }
}

function cells(xPosition, yPosition){
  push();

  fill(200);
  stroke(0);
  strokeWeight(2);
  rect(xPosition*cellSize,yPosition*cellSize,cellSize,cellSize);

  pop();
}
