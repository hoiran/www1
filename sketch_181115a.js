var a=50;
var b=30;
var c=40;
var d=0;

function setup() {
  createCanvas(700,750);
   background(196,230,240); 
  //noStroke();createCanvas(700,750);
   background(196,230,240); 
  //noStroke();

}

function draw() {
  
  fill(189);
 noStroke();
 rect(0,290,700,700);
 
 for(var x=0;x<=width;x+=200){
   for(var y=0; y<=height; y+=120){
     fill(157,104,75);
     strokeJoin(ROUND);
     stroke(157,104,75);
     strokeWeight(10);
     rect(x,y+310,120,45);
   }
 }
 
 
 for(var x=0; x<=width; x+=400){
   for(var y=0;y<=height; y+=240){
     fill(153,56,0);
     strokeJoin(ROUND);
     stroke(157,104,75);
     strokeWeight(10);
     rect(x,y+310,120,45);
   }
 }
 
 for (var x=0; x <=width; x+=400) {
    for (var y=0; y <=height; y+=240) {
      fill(157,104,75);
      strokeJoin(ROUND);
      stroke(137,90,65);
      strokeWeight(10);
      rect(x+200, y+430, 120, 45);
    }
  }
  
  for (var x=0; x <=width; x+=200) {
    for (var y=0; y <=height; y+=120) {
      fill(147,84,50);
      strokeJoin(ROUND);
      stroke(147,84,50);
      strokeWeight(10);
      rect(x+140, y+310, 40, 45);
    }
  }
  
   for (var x=0; x <=width; x+=400) {
    for (var y=0; y <=height; y+=240) {
      fill(147,84,50);
      strokeJoin(ROUND);
      stroke(147,84,50);
      strokeWeight(10);
      rect(x+340, y+310, 40, 45);
    }
  }

for (var x=0; x <=width; x+=400) {
    for (var y=0; y <=height; y+=240) {
      fill(147,84,50);
      strokeJoin(ROUND);
      stroke(147,84,50);
      strokeWeight(10);
      rect(x+140, y+430, 40, 45);
    }
  }

   
  for (var x=0; x <=width; x+=200) {
    for (var y=0; y <=height; y+=120) {
      fill(149,94,66);
      strokeJoin(ROUND);
      stroke(147,67,24);
      strokeWeight(10);
      rect(x+495, y+370, 100, 45);
    }
  }


  
  for (var x=0; x <=width; x+=400) {
    for (var y=0; y <=height; y+=240) {
      fill(147,67,24);
      strokeJoin(ROUND);
      stroke(0, 25);
      strokeWeight(10);
      rect(x+695, y+370, 100, 45);
    }
  }
  
  

  for (var x=0; x <=width; x+=200) {
    for (var y=0; y <=height; y+=120) {
      fill(155,96,81);
      strokeJoin(ROUND);
      stroke(155,96,81);
      strokeWeight(10);
      rect(x-105, y+370, 120, 45);
    }
  }
 
 

  for (var x=0; x <=width; x+=400) {
    for (var y=0; y <=height; y+=240) {
      fill(155,96,81);
      strokeJoin(ROUND);
      stroke(0, 25);
      strokeWeight(10);
      rect(x-105, y+370, 120, 45);
    }
  }
  
   for (var x=0; x <=width; x+=400) {
    for (var y=0; y <=height; y+=240) {
      fill(147,67,24);
      strokeJoin(ROUND);
      stroke(147,67,24);
      strokeWeight(10);
      rect(x+95, y+490, 120, 45);
    }
  }
  
  for (var x=0; x <=width; x+=200) {
    for (var y=0; y <=height; y+=120) {
      fill(100,55,44);
      strokeJoin(ROUND);
      stroke(100,55,44);
      strokeWeight(10);
      rect(x+35, y+370, 40, 45);
    }
  }
  
    for (var x=0; x <=width; x+=400) {
    for (var y=0; y <=height; y+=240) {
      fill(100,55,44);
      strokeJoin(ROUND);
      stroke(100,55,44);
      strokeWeight(10);
      rect(x+35, y+370, 40, 45);
    }
  }
 
 
   for (var x=0; x <=width; x+=400) {
    for (var y=0; y <=height; y+=240) {
      fill(100,55,44);
      strokeJoin(ROUND);
      stroke(100,55,44);
      strokeWeight(10);
      rect(x+235, y+490, 40, 45);
    }
  }


fill(196,230,240);
  noStroke();
  rect(0, 0, 700, 350);
  //blue_background_again
  fill(189);
  noStroke();
  rect(0, 326, 700, 60);
  
  if (a+d > width+800) {
    d=0;
  }
  noStroke();
  fill(255,255,255);
  ellipse(a+d+10, b+20, c+10, c+3);
  ellipse(a+d+10, b+50, c+15, c+15);
  ellipse(a+d-20, b+45, c+6, c);
  ellipse(a+d+40, b+45, c+5, c+5);
  ellipse(a+d+65, b+45, c-7, c-7);
  ellipse(a+d+10-400, b+20+100, c+10, c+3);
  ellipse(a+d+10-400, b+50+100, c+15, c+15);
  ellipse(a+d-20-400, b+45+100, c+6, c);
  ellipse(a+d+40-400, b+45+100, c+5, c+5);
  ellipse(a+d+65-400, b+45+100, c-7, c-7);
  ellipse(a+d-95-20, b+55+10, c+12-10, c-14);
  ellipse(a+d-70-20, b+60+10, c-10, c-12-10);
  ellipse(a+d-95-20-600, b+55+10+50, c+12-10, c-14);
  ellipse(a+d-70-20-600, b+60+10+50, c-10, c-12-10);
  d++;

//antenna 

  line( mouseX-160,mouseY-60, mouseX-180,mouseY-80);

  line(mouseX-100,mouseY-60, mouseX-80,mouseY-80);

  

 

//head4

  fill(47, 157,39);

  ellipse(mouseX+100, mouseY, 80, 80);

 

 

 

//head3

  fill(141, 183,42);

  ellipse(mouseX+40, mouseY, 100, 100);

 

 

 

//head2

  fill(47, 157,39);

  ellipse(mouseX-30, mouseY, 120, 120);

 

 

//head1

  fill(141, 183,42);

  ellipse(mouseX-120, mouseY, 140, 140);

 

 

//eye L

  fill(0, 0,0);

  ellipse(mouseX-160, mouseY-20, 10, 10);

  

//eyes R

  fill(0, 0,0);

  ellipse(mouseX-100, mouseY-20, 10, 10);

  

  //mouth

  fill(255, 36,36);

  ellipse(mouseX-130, mouseY+38, 60,40);


}
