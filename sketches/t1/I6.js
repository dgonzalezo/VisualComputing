let transx1 = 0;
let transx2 = 40;
let transx3 = 80;
let transx4 = 120;
let transx5 = 160;
let transx6 = 200;
let transx7 = 240;
let transx8 = 280;
let transx9 = 320;
let transx10 = 380;
let transx11 = -40;
let transx12 = -80;
let transx13 = -120;
let transx14 = -160;
let transx15 = -200;
let transx16 = -240;
let transx17 = -280;
let transx18 = -320;
let transx19 = -380;
let transx20 = 420;
let transx21 = 460;
let transx22 = 500;
let transx23 = 540;
let transx24 = 580;
let transx25 = 620;
let transx26 = 660;
let transx27 = 700;
let transx28 = 740;
let transxcube = 301;
let cubeWalkRight = 0;
let letUp = 1;
let centerPoint = 280;
function setup() {
  createCanvas(700, 300);
  background(100);
}

function draw() {
  createCanvas(400, 400);
  background(100);
  frameRate(30);
  drawlines(transx1);
  drawlines(transx2);
  drawlines(transx3);
  drawlines(transx4);
  drawlines(transx5);
  drawlines(transx6);
  drawlines(transx7);
  drawlines(transx8);
  drawlines(transx9);
  drawlines(transx10);
  drawlines(transx11);
  drawlines(transx12);
  drawlines(transx13);
  drawlines(transx14);
  drawlines(transx15);
  drawlines(transx16);
  drawlines(transx17);
  drawlines(transx18);
  drawlines(transx19);
  drawlines(transx20);
  drawlines(transx21);
  drawlines(transx22);
  drawlines(transx23);
  drawlines(transx24);
  drawlines(transx25);
  drawlines(transx26);
  drawlines(transx27);
  drawlines(transx28);

  /*
    
   
      if(transx1<-380){
        transx1 = 740;
      }
      if(transx2<-380){
        transx2 = 740;
      }
      if(transx3<-380){
        transx3 = 740;
      }
      if(transx4<-380){
        transx4 = 740;
      }
      if(transx5<-380){
        transx5 = 740;
      }
      if(transx6<-380){
        transx6 = 740;
      }
      if(transx7<-380){
        transx7 = 740;
      }
      if(transx8<-380){
        transx8 = 740;
      }
      if(transx9<-380){
        transx9 = 740;
      }
      if(transx10<-380){
        transx10 = 740;
      }
    
    if(transx11<-380){
        transx11 = 740;
      }
      if(transx12<-380){
        transx12 = 740;
      }
      if(transx13<-380){
        transx13 = 740;
      }
      if(transx14<-380){
        transx14 = 740;
      }
      if(transx15<-380){
        transx15 = 740;
      }
      if(transx16<-380){
        transx16 = 740;
      }
      if(transx17<-380){
        transx17 = 740;
      }
      if(transx18<-380){
        transx18 = 740;
      }
      if(transx19<-380){
        transx19 = 740;
      }
      if(transx20<-380){
        transx20 = 740;
      }
    if(transx21<-380){
        transx21 = 740;
      }
      if(transx22<-380){
        transx22 = 740;
      }
      if(transx23<-380){
        transx23 = 740;
      }
      if(transx24<-380){
        transx24 = 740;
      }
      if(transx25<-380){
        transx25 = 740;
      }
      if(transx26<-380){
        transx26 = 740;
      }
      if(transx27<-380){
        transx27 = 740;
      }
      if(transx28<-380){
        transx28 = 740;
      }
    
    
      transx1  = transx1  - 20;
      transx2  = transx2  - 20;
      transx3  = transx3  - 20;
      transx4  = transx4  - 20;
      transx5  = transx5  - 20;
      transx6  = transx6  - 20;
      transx7  = transx7  - 20;
      transx8  = transx8  - 20;
      transx9  = transx9  - 20;
      transx10 = transx10 - 20;
      transx11  = transx11  - 20;
      transx12  = transx12  - 20;
      transx13  = transx13  - 20;
      transx14  = transx14  - 20;
      transx15  = transx15  - 20;
      transx16  = transx16  - 20;
      transx17  = transx17  - 20;
      transx18  = transx18  - 20;
      transx19  = transx19  - 20;
      transx20 = transx20 - 20;
      transx21  = transx21  - 20;
      transx22  = transx22  - 20;
      transx23  = transx23  - 20;
      transx24  = transx24  - 20;
      transx25  = transx25  - 20;
      transx26  = transx26  - 20;
      transx27  = transx27  - 20;
      transx28  = transx28  - 20;
    */
  if (centerPoint < 0) {
    letUp = 1;
  }
  if (centerPoint > 500) {
    letUp = 0;
  }
  if (letUp == 1) {
    centerPoint = centerPoint + 5;
  }
  if (letUp == 0) {
    centerPoint = centerPoint - 5;
  }
  stroke("black");
  fill(220);
  circle(200, 300, 120);
  /*
    circle(200, 340, 120);
    /*
    
    /*
    circle(200, 300, 80);
    circle(100, 330, 80);
    circle(300, 260, 80);
    */

  if (centerPoint < 200) {
    letUp = 1;
  }
  if (centerPoint > 400) {
    letUp = 0;
  }
  if (letUp == 1) {
    centerPoint = centerPoint + 1;
  }
  if (letUp == 0) {
    centerPoint = centerPoint - 1;
  }
}

function drawlines(xd) {
  stroke("black");
  noFill();

  noFill();
  beginShape(LINES);
  vertex(200, centerPoint);
  vertex(xd, 350 + 50);
  endShape(CLOSE);

  beginShape(LINES);
  vertex(200, centerPoint);
  vertex(xd, 0);
  endShape(CLOSE);
}

function drawLinesHorizontal() {
  noFill();
  beginShape(LINES);
  vertex(0, centerPoint);
  vertex(500, centerPoint);
  endShape(CLOSE);
}
