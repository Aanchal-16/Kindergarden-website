let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

//gallery
const galleryItem = document.getElementsByClassName("gallery-item")
//create element for lightbox
const lightBoxContainer = document.createElement ("div")
//for basic area
const loghtBoxContent = document.createElement("div");
//for images
const lightBoxImg = document.createElement("div");
//for previous btn to change imgs
const lightBoxPrev = document.createElement("div");
//for next btn
const lightBoxNext = document.createElement("div");