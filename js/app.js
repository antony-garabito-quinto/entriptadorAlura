
  const texto = document.getElementById("texto");
  const boton_encriptado = document.getElementById("boton_encriptado");
  const boton_desencriptado = document.getElementById("boton_desencriptado");
  const boton_copia = document.getElementById("boton_copia");
  const tituloMensaje = document.getElementById("tituloMensaje");
  const imagen2 = document.getElementById("imagen2");
  const parrafo = document.getElementById("parrafo");
  const encriptado = document.getElementById("encriptado");

  let remplazar =[
  
    ["e" , "enter"],
    ["o" , "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u" , "ufat"],
  ]

const sustituir =(nuevoValor) =>{
    tituloMensaje.innerHTML = nuevoValor;

    texto.value ="";
    imagen2.classList.add("oculto");
    parrafo.style.display = "none";
    boton_copia.style.display = "block";
    encriptado.classList.add("ajustar");
    tituloMensaje.classList.add("ajustar");

}



boton_encriptado.addEventListener("click" , ()=>{

    const ingreseTexto =  texto.value.toLowerCase()

    function encriptacion (newText) {
        for(let i = 0 ; i <remplazar.length; i++){
            if(newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
            };
        };

        return newText
    }
    sustituir(encriptacion(ingreseTexto));

});

boton_desencriptado.addEventListener("click" , () =>{
    const ingreseTexto = texto.value.toLowerCase();
    function desencriptacion(newText){
        for (let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][1])){
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            };
        };
        return newText
    }

   sustituir (desencriptacion(ingreseTexto));

});

boton_copia.addEventListener("click", () => {
    let textoA = tituloMensaje;
    navigator.clipboard.writeText(textoA.value);
    textoA.select();
    document.execCommand("copy");

    tituloMensaje.innerHTML = "";

    imagen2.classList.remove("oculto");
    parrafo.style.display = "block";
    boton_copia.style.display = "none";
    encriptado.classList.remove("ajustar");
    tituloMensaje.classList.remove("ajustar");
    texto.focus();
    

})






/*function asignarTextoElemento(elemtento, texto){
    let titulo = document.querySelector(elemtento);
    titulo.innerHTML = texto;
    return;
}

function encriptacion(){
    let texto = document.getElementById('textoIngreso');

    if (texto== te) {

    }

}

function desencriptacion(){

}*/