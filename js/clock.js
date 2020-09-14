let clock = {};

clock.framePerSecond = 1;

clock.animate = () => {
  const { canvas, context, animate, framePerSecond } = clock;

  const halfW = canvas.width / 2;
  const halfH = canvas.height / 2;
  const smallHalf = halfW < halfH ? halfW : halfH;

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.lineCap = "round";

  // ----------------------
  // outer circle

  context.save();

  context.strokeStyle = "#fcdab7";
  context.lineWidth = 8;

  context.beginPath();
  context.arc(halfW, halfH, smallHalf - context.lineWidth / 2, 0, Math.PI * 2);
  context.stroke();

  context.restore();

  // ----------------------
  // time hands

  const date = new Date();
  const sec = date.getSeconds();
  const min = date.getMinutes() + sec / 60;
  const hour = (date.getHours() % 12) + min / 60;

  const hourAngle = Math.PI * (hour / 6 - 0.5);
  const minAngle = Math.PI * (min / 30 - 0.5);
  const secAngle = Math.PI * (sec / 30 - 0.5);

  let len, x, y;

  // ----------------------
  // hour hand

  len = smallHalf * 0.6;
  x = halfW + len * Math.cos(hourAngle);
  y = halfH + len * Math.sin(hourAngle);

  context.save();
  context.strokeStyle = "#fff";
  context.lineWidth = 8;
  context.beginPath();
  context.moveTo(halfW, halfH);
  context.lineTo(x, y);
  context.stroke();
  context.restore();

  context.save();
  context.fillStyle = "#fff";
  context.beginPath();
  context.arc(x, y, 8, 0, Math.PI * 2);
  context.fill();
  context.restore();

  // ----------------------
  // min hand

  len = smallHalf * 0.7;
  x = halfW + len * Math.cos(minAngle);
  y = halfH + len * Math.sin(minAngle);

  context.save();
  context.strokeStyle = "#fff";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(halfW, halfH);
  context.lineTo(x, y);
  context.stroke();
  context.restore();

  context.save();
  context.fillStyle = "#fff";
  context.beginPath();
  context.arc(x, y, 4, 0, Math.PI * 2);
  context.fill();
  context.restore();

  // ----------------------
  // sec hand

  len = smallHalf * 0.8;
  x = halfW + len * Math.cos(secAngle);
  y = halfH + len * Math.sin(secAngle);

  context.save();
  context.strokeStyle = "#fff";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(halfW, halfH);
  context.lineTo(x, y);
  context.stroke();
  context.restore();

  context.save();
  context.fillStyle = "#fff";
  context.beginPath();
  context.arc(x, y, 2, 0, Math.PI * 2);
  context.fill();
  context.restore();

  // ----------------------
  // mid circle

  context.save();

  context.fillStyle = "#fcdab7";

  context.beginPath();
  context.arc(halfW, halfH, smallHalf / 10, 0, Math.PI * 2);
  context.fill();

  context.restore();

  setTimeout(animate, 1000 / framePerSecond);
};
