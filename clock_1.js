const hrs = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

setInterval(() => {
  
  let crtTime = new Date();
  
  hrs.innerHTML = (crtTime.getHours() < 10 ? "0" : "") + crtTime.getHours();
  min.innerHTML = (crtTime.getMinutes() < 10 ? "0" : "") + crtTime.getMinutes();
  sec.innerHTML = (crtTime.getSeconds() < 10 ? "0" : "") + crtTime.getSeconds();
},1000)

