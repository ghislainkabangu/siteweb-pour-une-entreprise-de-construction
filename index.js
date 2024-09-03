/** @format */

let sidenav = document.getElementsByClassName("sidenav")[0];
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  sidenav.style = "left: -0px";
});

closeBtn.addEventListener("click", () => {
  sidenav.style = "left: -300px";
  sidenav.classList.add("active");
});

let links = document.querySelectorAll(".link");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    sidenav.style = "left: -300px";
  });
}
/*********************************************** */
let image = document.getElementById("image");
image.addEventListener("mouseover", () => {
  image.src = "album/joiejs.png";
});
image.addEventListener("mouseout", () => {
  image.src = "album/joie.png";
});
