const imgs = ["0.jpeg", "1.jpeg", "2.jpeg"];

const choosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImg = document.createElement("img");

bgImg.src = `imgs/${choosenImg}`;

document.body.appendChild(bgImg);