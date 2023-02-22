const menu = document.querySelector(".menu");
const  openMenuBtn = document.querySelector(".open-menu");


/*console.log("HOLA MUNDO"); //Prueba de que funciona */


function toggleMenu (){
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);