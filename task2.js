// funcion para obtener el nombre y el apellido

const form = document.getElementById("form1");

form.addEventListener("submit", function(event){
    // para evitar que la pagina se recargue
    event.preventDefault();
    // creamos un objeto con los datos del formulario
    const datos = new FormData(form);
    // obtenemos los datos segun su id
    const nombre = datos.get('fname');
    const apellido = datos.get('lname');
    // imprimimos los valores
    console.log(`Nombre: ${nombre}`);
    console.log(`Apellido: ${apellido}`)
});

