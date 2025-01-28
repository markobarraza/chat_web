let inputText = document.getElementById("prueba")
let boton = document.querySelector("button");
let resultado = document.querySelector(".contenedor_mensajes")

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
            html += `
            <div class="mensaje_out">
                <div class="container_mensaje">
                    ${mensaje.mensaje}
                </div>
                <div class="user_img"></div>
            </div>
            
            `;
        } else {
            html += `
            <div class="mensaje_in">
                    <div class="user_img"></div>
                    <div class="container_mensaje">
                        ${mensaje.mensaje}
                    </div>
                </div>
            `;
        }
        
        inputText.focus();
    }

    console.log(html)    
    resultado.innerHTML = html
})

