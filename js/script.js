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
let article = document.querySelectorAll("article");
for (let j = 0; j < article.length; j++) {
  article[j].addEventListener("mouseover", () => {
    article[j].classList.add("articleJSeffet");
  });

  article[j].addEventListener("mouseout", () => {
    article[j].classList.remove("articleJSeffet");
  });
}
/********************************GSAP************************** */
const texte = document.getElementById('slogan');
gsap.to(texte, {
    duration: 10,
    text: '" Votre maison, notre engagement "',
    ease: "none",
    repeat: -1
});
