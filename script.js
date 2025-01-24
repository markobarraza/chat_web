let inputText = document.getElementById("prueba")
let boton = document.querySelector("button");
let resultado = document.querySelector("p")

// arreglo vacio
const mensajes = []


boton.addEventListener("click", ()=>{
    let nuevoMensaje = inputText.value
    mensajes.push(
        {
            id: Date.now(),
            mensaje: nuevoMensaje
        }
    )
    inputText.value = ""


    let html = ""

    
    for (let i = 0; i < mensajes.length; i++) {
        const mensaje = mensajes[i];
        // verifica si es par (0) lo deja en el h2 y si no lo deja en el h3
        if (i % 2 === 0) {
            html += `<h2> ${mensaje.mensaje} </h2>`;
        } else {
            html += `<h3> ${mensaje.mensaje} </h3>`;
        }
    }

    console.log(html)    
    resultado.innerHTML = html
})

