/** @format */

/******************** GETION DES INTERACTION DES IMAGES DES MEMBRES DE L'EQUIPE********************************* */
let article = document.querySelectorAll("article");
for (let j = 0; j < article.length; j++) {
  article[j].addEventListener("mouseover", () => {
    article[j].classList.add("articleImg");
  });

  article[j].addEventListener("mouseout", () => {
    article[j].classList.remove("articleImg");
  });
}
