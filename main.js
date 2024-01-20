const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let timer = 0;
let obsArr = [];

canvas.width = 500;
canvas.height = window.innerHeight - 100;

const character = {
  x: 60,
  y: 300,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

class Obs {
  constructor() {
    (this.x = 600), (this.y = 300), (this.width = 50), (this.height = 50);
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


moveAction();

function moveAction() {
  requestAnimationFrame(moveAction);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  timer++;
  if (timer % 120 == 0) {
    let obs = new Obs();
    obsArr.push(obs);
  }
  obsArr.forEach((obs, index) => {
    obs.x -= 5; 
    if (obs.x + obs.width < 0) {
      obsArr.splice(index, 1);
    }
    obs.draw();
  });

  // draw line
  ctx.beginPath();
  ctx.moveTo(0, 350);
  ctx.lineTo(500, 350);
  ctx.stroke();

  character.draw();
}
