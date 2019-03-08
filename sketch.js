function setup(){
  createCanvas(400,400);
  scale = 5;
  cellSize = width/scale;

}

function draw(){
  background(100);

  // for(i=0;i<scale;i++){
  //   for(j=0;j<scale;j++){
  //     cells(i,j);
  //   }
  // }

  for(i=1;i<=scale*scale;i++){
    cells(i);
  }
}

function cells(cellNumber){

  x = cellNumber%scale;
  y = ceil(cellNumber/scale)-1;


  push();

  fill(255);
  cellCollor();
  stroke(0);
  strokeWeight(2);
  rect(x*cellSize,y*cellSize,cellSize,cellSize);

  pop();
}

function cellCollor(x,y){

}
