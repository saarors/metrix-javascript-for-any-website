document.querySelector("canvas")?.remove();

const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "999999";
canvas.style.pointerEvents = "none";

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

let columns = new Array(Math.floor(canvas.width / 16))
  .fill(0)
  .map(() => Math.random() * canvas.height);

const draw = () => {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(0,255,180,0.8)";
  ctx.font = "14px monospace";

  columns.forEach((y, i) => {
    const text = String.fromCharCode(0x30a0 + Math.floor(Math.random() * 96));
    ctx.fillText(text, i * 16, y);

    columns[i] = y > canvas.height ? 0 : y + 16;
  });

  requestAnimationFrame(draw);
};

draw();
