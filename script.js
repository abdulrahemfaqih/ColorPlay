const tUbahWarna = document.getElementById("tombolUbahWarna");
const target = document.getElementsByClassName("target")[0];
const tAcakWarna = document.createElement("button");
const textButton = document.createTextNode("Button 2");
const tombol = document.getElementsByClassName("tombol")[0];
const SMerah = document.getElementById("SMerah");
const SHijau = document.getElementById("SHijau");
const SBlue = document.getElementById("SBlue");

// button 1
tUbahWarna.addEventListener("click", function () {
  const r = Math.random() * 255 + 1;
  const g = Math.random() * 255 + 1;
  const b = Math.random() * 255 + 1;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// button 2

tAcakWarna.appendChild(textButton);
tAcakWarna.setAttribute("type", "button");
tombol.appendChild(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const r = Math.random() * 255 + 1;
  const g = Math.random() * 255 + 1;
  const b = Math.random() * 255 + 1;
  target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// slider

SMerah.addEventListener("input", function () {
  const r = SMerah.value;
  // console.log(r)
  document.body.style.backgroundColor = `rgb(${r}, 100, 100)`;
});

SHijau.addEventListener("input", function () {
  const r = SMerah.value;
  const g = SHijau.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, 100)`;
});

SBlue.addEventListener("input", function () {
  const r = SMerah.value;
  const g = SHijau.value;
  const b = SBlue.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
});
SBlue.addEventListener("input", function () {});

document.body.addEventListener("mousemove", function (e) {
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientX / window.innerWidth) * 255);
  document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
}); 
