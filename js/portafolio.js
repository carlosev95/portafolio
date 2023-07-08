let name = "Carlos Escobar Vázquez"
//Insertamos nuestro nombre en el DOM
document.getElementById("name").textContent = name

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});
