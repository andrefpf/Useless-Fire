function setup(){
  createCanvas(400,400);
  scale = 50;
  cellSize = width/scale;
  collorList = [];
  collorListTemp = [];

  frameRate(12);

}

function draw(){
  background(100);

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
  noStroke();
<<<<<<< HEAD
  //strokeWeight(1);
  rect(x*cellSize,y*cellSize,cellSize,cellSize);

  pop();
  //text(cellNumber, x*cellSize+cellSize/2, y*cellSize+cellSize/2);
=======
  rect(x*cellSize,y*cellSize,cellSize,cellSize);

  pop();
>>>>>>> 9ec0ace38523b1d62378397ae9009bbd2eafadc0
}

function cellCollor(cellNumber){

  quadradosAbaixo = floor(random(1,4));

  cor = collorList[cellNumber-1+(scale*quadradosAbaixo)+quadradosAbaixo]-20;

  if(cellNumber > scale*scale-scale*4){
    cor = 150;
  }


  fill(cor*2,cor,0);
  collorListTemp.push(cor);

<<<<<<< HEAD
  //cor = collorList[cellNumber-1]



=======
>>>>>>> 9ec0ace38523b1d62378397ae9009bbd2eafadc0
}
