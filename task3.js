// funcion para mostrar alertas

function infoLinks(){
    // obtenemos los enlaces 
    const links = document.querySelectorAll("a");
    // #de enlaces
    const totalEnlaces = links.length;
    // enlace 1
    const first = links[0].href;
    // ultimo enlace
    const last = links[totalEnlaces-1].href;
    // creamos la alerta
    alert("# de Enlaces:" + totalEnlaces + "\n Primer enlace: " + first + "\n Ultimo: " + last);
};