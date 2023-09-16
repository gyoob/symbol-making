let angle = 28           // 날개의 각도 (Rad)
let baseL = 300          // 날개의 길이
let baseR = 24           // 기본 모서리 반경

// 네 군데의 R값 (각 방향)
let r3 = (4-$('#slider3').val())*9;
let r12 = (4-$('#slider12').val())*9;
let r9 = (4-$('#slider9').val())*9;
let r6 = (4-$('#slider6').val())*9;

// 추가 선
let addLine = 2;

// 컬러
let hue1 = 225;      // 오른쪽 날개 컬러
let hue2 = 184;      // 왼쪽 날개 컬러
let hueDist = 44;    // 그러데이션 거리
let sat = 80;        // 채도
let bri = 100;       // 밝기
let leftMirror = false;

// 두개 조합 관련
let gapX = 10;       // 가로 간격
let overlapY = 70;   // 세로 겹치는 부분
let distort = 10;     // 기울어진 정도

let gradient;

function setup() {
  createCanvas(432,432)
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background(80)
  
  push()
  scale(0.6)
  translate(width/2, height/2)
  translate(width/3, height/3)
  rotate(radians(distort))
  translate(-width/2, -height/2)
  
  // ============= 우측 날개 ================
  gradient = drawingContext.createLinearGradient(0, -baseL, baseL, 0)
  gradient.addColorStop(0, color(hue1%360, sat, bri, 100));
  gradient.addColorStop(1, color((hue1+hueDist)%360, sat, bri, 100));
  drawingContext.fillStyle = gradient;
    
  push()
  translate(width/2 + gapX, height/2 + overlapY)
  
  beginShape()
  
  vertex(baseR, 0)
  
  // 3시 방향 반경 중심 (r3)
  let x3 = baseL - r3 / tan(radians(angle/2));
  let y3 = -r3
  drawR(x3, y3, r3, 90, -90 + angle)
  
  // 꺾인지점
  let wingR = baseL / sqrt(2) / cos(radians(45-angle))
  // console.log(wingR)
  vertex(baseL - wingR * cos(radians(angle)), - wingR * sin(radians(angle)) ) 
  
  // 12시 방향 반경 중심 (x12)
  let x12 = r12 
  let y12 = - baseL + r12 / tan(radians(angle/2));
  drawR(x12, y12, r12, -angle, -180)
  
  vertex(0, -baseR)
  drawR(baseR, -baseR, baseR, 180, 90)
  
  endShape(CLOSE)
  
  // 추가 선 1
  if(addLine >= 1){
    push();
    translate(36, -36) // 간격 여기서 조절
    scale(0.85)
    stroke(0)
    strokeWeight(25)
    noFill();
    gradient = drawingContext.createLinearGradient(0, -baseL, baseL, 0)
    gradient.addColorStop(0, color(hue1%360, sat, bri, 90)); // 투명도 여기서 조절
    gradient.addColorStop(1, color((hue1+hueDist)%360, sat, bri, 90)); // 투명도 여기서 조절
    drawingContext.strokeStyle = gradient;

    beginShape()
    vertex( x3 + r3*cos(radians(-90+ angle)), y3 + r3*sin(radians(-90+ angle)) )
    vertex(baseL - wingR * cos(radians(angle)), - wingR * sin(radians(angle)) ) 
    vertex( x12 + r12*cos(radians(-angle)), y12 + r12*sin(radians(-angle)) )
    endShape()
    pop();
  }
  
  // 추가 선 2
  if(addLine >= 2){
    push();
    translate(75, -75) // 간격 여기서 조절
    scale(0.7)
    stroke(0)
    strokeWeight(25)
    noFill();
    gradient = drawingContext.createLinearGradient(0, -baseL, baseL, 0)
    gradient.addColorStop(0, color(hue1%360, sat, bri, 60)); // 투명도 여기서 조절
    gradient.addColorStop(1, color((hue1+hueDist)%360, sat, bri, 60)); // 투명도 여기서 조절
    drawingContext.strokeStyle = gradient;

    beginShape()
    vertex( x3 + r3*cos(radians(-90+ angle)), y3 + r3*sin(radians(-90+ angle)) )
    vertex(baseL - wingR * cos(radians(angle)), - wingR * sin(radians(angle)) ) 
    vertex( x12 + r12*cos(radians(-angle)), y12 + r12*sin(radians(-angle)) )
    endShape()
    pop();
  }
  
  pop()
  
  // ============= 좌측 날개 ================
  gradient = drawingContext.createLinearGradient(0, -baseL, baseL, 0)
  gradient.addColorStop(0, color((hue2+hueDist)%360, sat, bri, 100));
  gradient.addColorStop(1, color(hue2%360, sat, bri, 100));
  if(leftMirror){
    gradient = drawingContext.createLinearGradient(0, -baseL, baseL, 0)
    gradient.addColorStop(1, color((hue1+hueDist)%360, sat, bri, 100));
    gradient.addColorStop(0, color(hue1%360, sat, bri, 100));
  }
  drawingContext.fillStyle = gradient;
  
  push()
  translate(width/2 - gapX, height/2 - overlapY)
  rotate(PI) // 180도 회전
  beginShape()
  
  vertex(baseR, 0)
  
  // 3시 방향 반경 중심 (r9)
  let x9 = baseL - r9 / tan(radians(angle/2));
  let y9 = -r9
  drawR(x9, y9, r9, 90, -90 + angle)
  
  // 꺾인지점
  console.log(wingR)
  vertex(baseL - wingR * cos(radians(angle)), - wingR * sin(radians(angle)) ) 
  
  // 12시 방향 반경 중심 (x12)
  let x6 = r6 
  let y6 = - baseL + r6 / tan(radians(angle/2));
  drawR(x6, y6, r6, -angle, -180)
  
  vertex(0, -baseR)
  drawR(baseR, -baseR, baseR, 180, 90)
  
  endShape(CLOSE)
  pop()
  
  pop()
  
  
  
  
  
  // == 테스트용 ===
  r3 = (4-$('#slider3').val())*9;
  r12 = (4-$('#slider12').val())*9;
  r9 = (4-$('#slider9').val())*9;
  r6 = (4-$('#slider6').val())*9;
  
  // hue1 =
  // hue2 =
  
  // addLine = 2
}



function drawR(_cx, _cy, _r, _a1, _a2){
  if(_a1>_a2){
    for(let i=_a1; i>_a2; i-=5){
      vertex( _cx + _r*cos(radians(i)), _cy + _r*sin(radians(i)) )
    }
  }else{
    for(let i=_a1; i<_a2; i+=5){
      vertex( _cx + _r*cos(radians(i)), _cy + _r*sin(radians(i)) )
    }
  }
  
}