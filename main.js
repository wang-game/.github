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
    (this.x = 400), (this.y = 300), (this.width = 50), (this.height = 50);
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
let obs = new Obs();
obs.draw();
