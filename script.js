let hour_hand = document.querySelector(".hour-hand");
let min_hand = document.querySelector(".min-hand");
let sec_hand = document.querySelector(".sec-hand");
let dh = document.querySelector(".dh");
let dm = document.querySelector(".dm");
let ds = document.querySelector(".ds");

setInterval(() => {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let hRotation = 30 * h + h / 2;
  let mRotation = 6 * m;
  let sRotation = 6 * s;
  hour_hand.style.transform = `rotate(${hRotation}deg)`;
  min_hand.style.transform = `rotate(${mRotation}deg)`;
  sec_hand.style.transform = `rotate(${sRotation}deg)`;
  dh.innerHTML = h < 10 ? "0" + h : h;
  dm.innerHTML = m < 10 ? "0" + m : m;
  ds.innerHTML = s < 10 ? "0" + s : s;
});
