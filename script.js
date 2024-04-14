let text = document.getElementById("text");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
//   console.log("Scroll value:", value);
//   console.log("Text element:", text);
//   console.log("Image elements:", img1, img2, img3, img4);

  text.style.marginTop = value * -1.5 + "px";
  img1.style.top = value * 0.75 + "px";
  img2.style.top = value * 0.5 + "px";
  img3.style.top = value * 0.25 + "px";
});
