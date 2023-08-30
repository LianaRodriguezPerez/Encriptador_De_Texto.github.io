 function encriptar(){

    let validartexto = document.getElementById("validartexto").value;
    let tituloMensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco")
    // i = para que tome las letras mayusculas y minusculas
    // g = tomae toda la linea 
    // m = tome encuenta multiples lineas

    let textoCifrado = validartexto
                                .replace(/e/img, "enter")
                                .replace(/o/img, "ober")
                                .replace(/i/img, "imes")
                                .replace(/a/img, "ai")
                                .replace(/u/img, "ufat")

    if(validartexto.length !=0){
        document.getElementById("validartexto").value = textoCifrado; 
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent ="";
        muñeco.src = "./imagenes/encriptado.jpg";
    } else{
        muñeco.src ="./imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado"
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        swal ("Oops","Debes ingresar algún texto");
    }

}
 
 function desencriptar(){
   let validartexto = document.getElementById("validartexto").value;
   let tituloMensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco")
   let textoCifrado = validartexto
   .replace(/enter/img, "e")
   .replace(/ober/img, "o")
   .replace(/imes/img, "i")
   .replace(/ai/img, "a")
   .replace(/ufat/img, "u")

   if(validartexto.length !=0){
      document.getElementById("validartexto").value = textoCifrado; 
      tituloMensaje.textContent = "Texto desencriptado con exito";
      parrafo.textContent ="";
      muñeco.src = "./imagenes/encriptado.jpg";
  } else{
      muñeco.src ="./imagenes/muñeco.png";
       tituloMensaje.textContent = "Ningún mensaje fue encontrado"
         parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
         swal ("Oops","Debes ingresar algún texto");
  }

 }
 
  
 
 