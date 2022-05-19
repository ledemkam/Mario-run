let mario = document.querySelector("#mario");
let solHaut = document.querySelector("#sol-haut");
let solBas = document.querySelector("#sol-bas");
let paysage = document.querySelector("#paysage");
let ciel = document.querySelector("body");

let decalage = 0;

window.onload = () => {
  document.addEventListener("keydown", marcher);
  document.addEventListener("keyup", stopper);
};

/**
 * This function runs Mario
 */
function marcher(event) {
  switch (event.key) {
    case "ArrowLeft":
      //  Mario animation
      mario.classList.add("mario-gauche");
      mario.classList.remove("mario-droite");
      parallaxe();
      decalage++;
      break;
    case "ArrowRight":
      mario.classList.add("mario-droite");
      mario.classList.remove("mario-gauche");
      parallaxe();
      decalage--;
      break;
  }
}

/**
 * This function stops Mario
 */
function stopper(event) {
  mario.classList.remove("mario-gauche");
  mario.classList.remove("mario-droite");
}

/**
 * We shift the different elements
 */
function parallaxe() {
  solBas.style.backgroundPositionX = decalage * 4 + "px";
  solHaut.style.backgroundPositionX = decalage * 4 + "px";
  paysage.style.backgroundPositionX = decalage * 2 + "px";
  ciel.style.backgroundPositionX = decalage + "px";
}
