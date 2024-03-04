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
/********************************appel de l'API************************** */
let maps = document.getElementById("maps");
fetch(
  "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
).then((res) => {
  if (res.ok) {
    res.json().then((data) => (maps.src = data[0].url));
  } else {
    maps.alt = ":(";
  }
});
