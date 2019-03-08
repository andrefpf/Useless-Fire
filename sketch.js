function setup(){
  createCanvas(400,400);
  scale = 5;
  cellSize = width/scale;
  collorList = [];
  collorListTemp = [];


}

function draw(){
  background(100);

  quadradosAbaixo = 2;

  for(i=1;i<=scale*scale;i++){
    cells(i);
  }
  collorList = collorListTemp;
  collorListTemp = [];
}

function cells(cellNumber){

  x = (cellNumber-1)%scale;
  y = ceil(cellNumber/scale)-1;


  push();

  fill(0);
  cellCollor(cellNumber);
  stroke(0);
  strokeWeight(2);
  rect(x*cellSize,y*cellSize,cellSize,cellSize);

  pop();
  text(cellNumber, x*cellSize+cellSize/2, y*cellSize+cellSize/2);
}

function cellCollor(cellNumber){

  cor = collorList[cellNumber-1+(scale*quadradosAbaixo)]+40;
  if(cellNumber > scale*scale-scale){
    cor = 10;
  }


  fill(cor*2,cor,0);
  collorListTemp.push(cor);

  //cor = collorList[cellNumber-1]



}
