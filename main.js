const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 캐릭터

let character = {
  x: 10,
  y: 300,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

character.draw();

// // 장애물
class Obs {
  constructor() {
    (this.width = 50 +Random(-25, 50)), (this.height = 50 +Random(-25, 50)), (this.x = 400), (this.y = 350 -this.height)
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
let obs = new Obs();
obs.draw();

//장애물 렌덤 크기 범위
function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
