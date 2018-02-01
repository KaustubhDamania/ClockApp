function draw(ctx, centreX, centreY, radius, startAngle, endAngle, colorOfStroke) {
  ctx.beginPath();
  ctx.arc(centreX,centreY,radius,startAngle,endAngle,false);
  ctx.lineWidth=20;
  ctx.strokeStyle=colorOfStroke;
  ctx.stroke();
}
function writeText(context, centreX, centreY, text, textColor){
  context.beginPath();
  context.fillStyle = textColor;
  context.fillText(text,centreX,centreY);
  context.font="20px Arial";
  context.fill();
}
window.onload = function() {
  var pi=Math.PI;
  var d = new Date();
  var hr,min,sec;
  var centerCanvasX=canvas2.width/2;
  var centerCanvasY=canvas2.height/2;
  hr=d.getHours()%12;
  min=d.getMinutes();
  sec=d.getSeconds();
  //console.log(hr+'.'+min+'.'+sec);
  var hrClock, minClock, secClock;
  hrClock=hr*pi/6//+(pi/360*sec);
  minClock=min*pi/30;
  secClock=sec*pi/30;
  var c=document.getElementById("canvas2");
  var ctx=c.getContext("2d");
  draw(ctx,centerCanvasX,centerCanvasY,200,3*pi/2,secClock-pi/2,'#FF6A6A');
  if(sec==0 || sec==0 && min==0)
  {
    ctx.clearRect(0,0,canvas2.width,canvas2.height);
  }
  draw(ctx,centerCanvasX,centerCanvasY,250,3*pi/2,minClock-pi/2,'#00BFA5');
  draw(ctx,centerCanvasX,centerCanvasY,300,3*pi/2,hrClock-pi/2,'#3D5AFE');
  ctx.beginPath();
  ctx.arc(centerCanvasX,centerCanvasY,400,0,2*pi,false);
  ctx.lineWidth=5;
  ctx.strokeStyle="black";
  ctx.stroke();
  //draw(ctx,centerCanvasX,centerCanvasY,350,0,2*pi,'#000000');
  //writeText(ctx,centerCanvasX,centerCanvasY,"Hello","red");
  for(var i=1; i<=60; i++)
  {
    var posX = centerCanvasX - (350*Math.sin((-2*i*pi/60)));
    var posY = centerCanvasY - (350*Math.cos((-2*i*pi/60)));
    if(i%5==0)
    {
      writeText(ctx,posX,posY,i/5,"black");
      continue;
    }
    writeText(ctx,posX,posY,".","black");
  }
}
setInterval(window.onload, 1000);
