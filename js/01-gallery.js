// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import "../src/styles.css";

function initLightbox() {
  const lightbox = new SimpleLightbox(".gallery a");
}

window.addEventListener("DOMContentLoaded", () => {
  initLightbox;

  initLight;

  init;

  initLightbox();
});

console.log(galleryItems);
