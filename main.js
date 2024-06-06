// HTML Canvas

// Canvas setup
var cnv = document.getElementById("my-canvas");
var ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

// sky
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 800, 800);

// lake
ctx.fillStyle = "blue";
ctx.fillRect(0, 620, 800, 800);

// land
ctx.fillStyle = "green";
ctx.fillRect(0, 500, 800, 120);

// moon
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(590, 80, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

// buildings 1
// wall 1
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(100, 500);
ctx.lineTo(100, 460);
ctx.stroke();

// wall 2
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(150, 500);
ctx.lineTo(150, 460);
ctx.stroke();

// door side 1
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(120, 500);
ctx.lineTo(120, 480);
ctx.stroke();

// door side 2
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(130, 500);
ctx.lineTo(130, 480);
ctx.stroke();

// door top
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(120, 480);
ctx.lineTo(130, 480);
ctx.stroke();

// house top
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(100, 460);
ctx.lineTo(150, 460);
ctx.stroke();

// house rooftop side 1
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(100, 460);
ctx.lineTo(125, 430);
ctx.stroke();

// house rooftop side 2
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(150, 460);
ctx.lineTo(125, 430);
ctx.stroke();

// window 1
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(110, 470, 6, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

// window 2
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(140, 470, 6, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

// x:1-500
// y:1-1000
// // stars
let stars = document.getElementById("stars");
ctx.drawImage(stars, 100, 3, 35, 35);
ctx.drawImage(stars, 230, 20, 35, 35);
ctx.drawImage(stars, 360, 20, 35, 35);
ctx.drawImage(stars, 490, 20, 35, 35);
//
ctx.drawImage(stars, 90, 50, 35, 35);
ctx.drawImage(stars, 200, 60, 35, 35);
ctx.drawImage(stars, 340, 60, 35, 35);
ctx.drawImage(stars, 450, 60, 35, 35);
//
ctx.drawImage(stars, 90, 50, 35, 35);
ctx.drawImage(stars, 200, 60, 35, 35);
ctx.drawImage(stars, 340, 60, 35, 35);
ctx.drawImage(stars, 450, 60, 35, 35);

// title
ctx.fillStyle = "rgb(25,4,4)";
ctx.font = "30px Arial";
ctx.fillText("Good night", 600, 450);
