// seleccionar el id contenedor
const contenedor = document.getElementById("container");
console.log(contenedor);

// seleccionar los elementos de la lista con segundo
const segundo = document.querySelectorAll(".second")
console.log(segundo);
// elemento de ol
const tercero = document.querySelector("ol .third");
console.log(tercero);

// hola en la seccion con el contenedor
container.innerHTML += "<p>¡Hola!</p>";

// añadir la clase principal
const piePagina = document.querySelector(".footer")
piePagina.classList.add("main");

// remover la clase main
piePagina.classList.remove("main");

// crear un nuevo elemento li
const newLi = document.createElement("li");

// darle el texto cuatro al elemento creado
newLi.textContent = "cuatro";

// añadir al elemento ul el li creado
const ul = document.querySelector("ul");
ul.append(newLi)
console.log(ul);
