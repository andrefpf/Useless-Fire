scl = 0;
cell = [];  

function setup(){
  createCanvas(400,400);  
}

function draw(){
  background(0);

  for(i=0; i<width/scl; i++){
    for(j=0;j<=height/scl; j++){
      rect(i,j,scl,scl)
    }
  }
  
}