const btnMenu = document.querySelector("btnMenu");
const responsive = document.querySelector("responsive");
btnMenu.addEventListener("click", function(){
    responsive.classList.toggle("mostrar");
})