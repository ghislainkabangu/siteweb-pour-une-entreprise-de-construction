/** @format */

/***********************menu *******************************/
let openMenu = document.querySelector(".openMenu");
let closeMenu = document.querySelector(".close");
let menu = document.querySelector(".sid_nav_barre");
openMenu.addEventListener("click", () => {
  menu.classList.add("sid_nav_barrejs");
});
closeMenu.addEventListener("click", () => {
  menu.classList.remove("sid_nav_barrejs");
});

/**************************************************** */
let link = document.querySelectorAll(".link");
for (let x = 0; x < link.length; x++) {
  link[x].addEventListener("click", () => {
    menu.classList.remove("sid_nav_barrejs");
  });
}
/********************** GETION DES INTERACTION DES IMAGES DES MEMBRES DE L'EQUIPE********************************* */
let prestataireDiv = document.querySelectorAll(".prestataireDiv");
for (let j = 0; j < prestataireDiv.length; j++) {
  prestataireDiv[j].addEventListener("mouseover", () => {
    prestataireDiv[j].classList.add("articleJSeffet");
  });

  prestataireDiv[j].addEventListener("mouseout", () => {
    prestataireDiv[j].classList.remove("articleJSeffet");
  });
}
/********************************GSAP************************** */
