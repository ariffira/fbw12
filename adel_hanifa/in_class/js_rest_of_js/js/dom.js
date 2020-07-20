let mycolor = 'blue'

document.getElementById('circleID').addEventListener('mouseover', function () {
  circleID.style.transform = `scale(1.1)`;
  circleID.style.background = `red`;
});

circleID.addEventListener('mouseout', function () {
  circleID.style.transform = `scale(1.0)`;
  circleID.style.background = mycolor;
});

document.getElementById('btnIDtl').addEventListener('click', function () {
  circleID.style.top = `2%`;
  circleID.style.left = `2%`;
  mycolor = `#343a40`;
  circleID.style.background = mycolor;

});

document.getElementById('btnIDtc').addEventListener('click', function () {
  circleID.style.top = `2%`;
  circleID.style.left = `50%`;
  mycolor = `#dc3545`;
  circleID.style.background = mycolor;

});

document.getElementById('btnIDtr').addEventListener('click', function () {
  circleID.style.top = `2%`;
  circleID.style.left = `90%`;
  mycolor = `#ffc107`;
  circleID.style.background = mycolor;

});

document.getElementById('btnIDml').addEventListener('click', function () {
  circleID.style.top = `40%`;
  circleID.style.left = `2%`;
  mycolor = `#28a745`;
  circleID.style.background = mycolor;

});

document.getElementById('btnIDmc').addEventListener('click', function () {
  circleID.style.top = `40%`;
  circleID.style.left = `50%`;
  mycolor = `#007bff`;
  circleID.style.background = mycolor;

});

document.getElementById('btnIDmr').addEventListener('click', function () {
  circleID.style.top = `40%`;
  circleID.style.left = `90%`;
  mycolor = `#e83e8c`;
  circleID.style.background = mycolor;

});

document.getElementById('btnIDbl').addEventListener('click', function () {
  circleID.style.top = `78%`;
  circleID.style.left = `2%`;
  mycolor = `#20c997`;
  circleID.style.background = mycolor;

});

document.getElementById('btnIDbc').addEventListener('click', function () {
  circleID.style.top = `78%`;
  circleID.style.left = `50%`;
  mycolor = `#28a745`;
  circleID.style.background = mycolor;

});

document.getElementById('btnIDbr').addEventListener('click', function () {
  circleID.style.top = `78%`;
  circleID.style.left = `90%`;
  mycolor = `#343a40`;
  circleID.style.background = mycolor;

});

