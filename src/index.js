const btnAbrir = document.querySelector("#btnAbrir"),
      navegacion = document.querySelector(".inicio__navegacion");

let contador = 0;
btnAbrir.addEventListener("click", ()=>{
    
    navegacion.classList.toggle("translate")
    // Otra forma sin usar contador seria verificar la URL btnAbrir.src
    if (contador == 0){
        btnAbrir.src = "images/icon-close.svg"
        contador++;
    } else {
        btnAbrir.src = "images/icon-hamburger.svg"
        contador--;
    }
});