const img = document.getElementsByTagName("img")[0];
const imgCoords = img.getBoundingClientRect();
let rotateX = 0;
let rotateY = 0;
const centerX = img.width / 2;
const centerY = img.height / 2;
let status = false;
img.addEventListener("mousemove", (e) => {
  status = true;
  const x = e.clientX - imgCoords.left;
  const y = e.clientY - imgCoords.top;
  img.style.transform = "";

  rotateY = ((x - centerX) / centerX) * 5;
  rotateX = -((y - centerY) / centerY) * 5;

  img.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;
});
img.addEventListener("mouseleave", () => {
  status = false;
  let s = setInterval(() => {
    if (!status) {
      if ((rotateX) > 0 && (rotateX) < 0.2 && (rotateY) > 0&& (rotateY) < 0.2) {
        img.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        clearInterval(s);
        
      }
      if ((rotateX) - 0.1 > 0) {
        rotateX -= 0.1;
      }
      if ((rotateY) - 0.1 > 0) {
        rotateY -= 0.1;
      }

 if ((rotateX) < 0 && (rotateX) > -0.2 && (rotateY) < 0&& (rotateY) > -0.2) {
        img.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        clearInterval(s);
        
      }
 if ((rotateX) + 0.1 < 0 && String(rotateX).includes("-")) {
        rotateX += 0.1;
      }
      if ((rotateY) + 0.1 < 0 && String(rotateY).includes("-")) {
        rotateY += 0.1;
      }
      img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    } else if (status) {
      clearInterval(s);
    }
  }, 10);
});
