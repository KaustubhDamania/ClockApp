function draw(ctx, centreX, centreY, radius, startAngle, endAngle, colorOfStroke) {
  ctx.beginPath();
  ctx.arc(centreX,centreY,radius,startAngle,endAngle,false);
  ctx.lineWidth=40;//50;
  ctx.strokeStyle=colorOfStroke;
  ctx.stroke();
}
function writeText(context, centreX, centreY, text, textColor, textFont = "15px Arial"){
  context.beginPath();
  context.fillStyle = textColor;
  context.fillText(text,centreX,centreY);
  context.font=textFont;
  context.fill();
}
var format = (x) => {
  if(x<10)
    return "0"+x.toString();
  return x.toString();
}
window.onload = function() {
    window.addEventListener("", async e => { // ## trigger on load
        if ('serviceWorker' in navigator) { // show other serviceworker in application tabs
            try {
                navigator.serviceWorker.register('serviceworker.js');
                console.log('SW registered');
            } catch (error) {
                console.log('SW failed');

            }
        }
    });

  var pi=Math.PI;
  var d = new Date();
  var hr,min,sec;
  var centerCanvasX=canvas2.width/2;
  var centerCanvasY=canvas2.height/2;
  hr=d.getHours()%12;
  min=d.getMinutes();
  sec=d.getSeconds();


  /*hrRadius = 175;
  minRadius = 225;
  secRadius = 275;
  dotRadius = 350;
  outerRadius = 400;*/
  hrRadius = 125;//175-75;
  minRadius = 165;//225-75;
  secRadius = 205;//275-75;
  dotRadius = 365-75;
  outerRadius = 415-75;

  whiteColor = '#F0F0F0';

  var hrClock, minClock, secClock;
  hrClock=hr*pi/6//+(pi/360*sec);
  minClock=min*pi/30;
  secClock=sec*pi/30;
  var c=document.getElementById("canvas2");
  var ctx=c.getContext("2d");
  ctx.clearRect(0,0,canvas2.width,canvas2.height);
  draw(ctx,centerCanvasX,centerCanvasY,secRadius,3*pi/2,secClock-pi/2,'#FF6A6A');
  if(sec==0 || sec==0 && min==0)
  {
    ctx.clearRect(0,0,canvas2.width,canvas2.height);
  }
  draw(ctx,centerCanvasX,centerCanvasY,minRadius,3*pi/2,minClock-pi/2,'#00BFA5');
  draw(ctx,centerCanvasX,centerCanvasY,hrRadius,3*pi/2,hrClock-pi/2,'#3D5AFE');
  ctx.beginPath();
  ctx.arc(centerCanvasX,centerCanvasY,outerRadius,0,2*pi,false);
  ctx.lineWidth=5;
  ctx.strokeStyle="white";
  ctx.stroke();
  //draw(ctx,centerCanvasX,centerCanvasY,350,0,2*pi,'#000000');
  //writeText(ctx,centerCanvasX,centerCanvasY,"Hello","red");
  for(var i=1; i<=60; i++)
  {
    var posX = centerCanvasX - (dotRadius*Math.sin((-2*i*pi/60)));
    var posY = centerCanvasY - (dotRadius*Math.cos((-2*i*pi/60)));
    if(i%5==0)
    {
      writeText(ctx,posX,posY,i/5,whiteColor);
      continue;
    }
    writeText(ctx,posX,posY,".",whiteColor);
  }
  hr = format(hr);
  min = format(min);
  sec = format(sec);
  time = hr+":"+min+":"+sec;
  var timetag = document.getElementById('time');
  console.log(canvas2.height);
  timetag.style.left = (centerCanvasX-25).toString()+"px";
  timetag.style.top = (centerCanvasY-10).toString()+"px";
  timetag.innerHTML = time;
}
setInterval(window.onload, 1000);
