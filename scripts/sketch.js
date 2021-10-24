let confettiColor = [], confetti = [];
let message= '\b\b\bCiao! sono Emma Capocasale, \ne sei stato invitato alla mia festa di'
let message2= 'Compleanno'
let message3= 'Battesimo'
let f=0;
let colors = new Array()
let size;
let isFirst=true;
// The radius of a circle
var r = 300;
let font;
let font2;

function preload(){
  font = loadFont('assets/RougeScript-Regular.ttf')
  font2 = loadFont('assets/Damion-Regular.ttf')
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  if(windowWidth>0 && windowWidth<450){

    size= windowWidth/14.6
    r=220
  }else if(windowWidth>700){
    size= windowWidth/72
    r=300
   
  }else{
    size= windowWidth/18.6
r=300
  }
	confettiColor = [color('#00aeef'), color('#ec008c'), color('#72c8b6')];
  for (let i = 0; i < 250; i++) {
    confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-2, 2));
  }

  for(i=0;i<=message2.length;i++){
 
    colors.push(color('#ec008c'))
  }
}

function draw() {
  background(255,240,255);
	push()
	for (let i = 0; i < confetti.length / 2; i++) {
    confetti[i].confettiDisplay();

    if (confetti[i].y > height) {
      confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
    }
  }


  pop()
 

  push()
noStroke()
  fill(805,255,255)
  translate(width/2-15,height/2-15)
  beginShape()
    for(i=0;i<=r;i++){
      let x = r*cos(i)+noise(i,f)*40;
      let y = r*sin(i)+noise(i,f)*40;
      vertex(x, y)
    }
    endShape(CLOSE)
  pop()


  push()

  
  
  // We must keep track of ur position along the curve
  var arclength = 0;

  // For every box
  textSize(size*2.7)
    textFont(font2)
  f+=0.01
  if(windowWidth>0 && windowWidth<600){pos=11}else{pos=10.5}
  for(i=0;i<=message2.length;i++){
    if(i==4){
      translate(42, 0)
    }
    else if( i==2){
      translate(30, 0)
    }
    else if( i==3){
      translate(47, 0)
    }
    else if( i==4){
      translate(30, 0)
    }
    else if( i==5){
      translate(20, 0)
    }
    else if( i==6){
      translate(24, 0)
    }
    else if( i==7){
      translate(34, 0)
    }
    else if( i==8){
      translate(34, 0)
    }
    else if( i==9){
      translate(34, 0)
    }
    else{
      translate(40, 0)
      
    }

      
    stroke(0, 0, 0)
    strokeWeight(2)
  
  
    noStroke()
    fill(map(noise(i,f),0,1,150,colors[i].levels[0]),noise(i,f)*colors[i].levels[1],noise(i,f)*colors[i].levels[2],)
    text(message2[i],width/2-size*pos+66, height/2-30)

  }

  
  pop()
  push()
  textSize(size*0.7)
  
  stroke(0)
  strokeWeight(0.2)
  textFont(font2)
  text(message, width/2-size*4.2, height/2-120)
  
  pop()
  push()

  textFont(font2)
  
  
  // We must keep track of ur position along the curve
  var arclength = 0;

  // For every box
  textSize(size*2.7)

  f+=0.01
  if(windowWidth>0 && windowWidth<600){pos=11}else{pos=10.5}
  for(i=0;i<=message2.length;i++){
    if(i==4){
      translate(23, 0)
    }
    else if( i==5){
      translate(28, 0)
    }
    else if( i==2){
      translate(35, 0)
    }
    else if( i==6){
      translate(22, 0)
    }
    else if( i==7){
      translate(14, 0)
    }
    else if( i==8){
      translate(50, 0)
    }
    else if( i==3){
      translate(22, 0)
    }
    
    else{
      
      translate(42, 0)
    }

      
    stroke(0, 0, 0)
    strokeWeight(2)
  
  
    noStroke()
    fill(map(noise(i,f),0,1,150,colors[i].levels[0]),noise(i,f)*colors[i].levels[1],noise(i,f)*colors[i].levels[2],)
    text(message3[i],width/2-size*pos+100, height/2+100)

  }

  
  pop()
  push()
  textSize(size*0.6)
  fill(0)
  stroke(255)
  strokeWeight(3)
  text('&', width/2-size+20, height/2+30)
  pop()

}