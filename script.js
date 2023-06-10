const textArea = document.querySelector(".validartexto");



 function validarTexto(){ //se crea función para que valide texto 

        let texto= document.getElementById("validartexto").value; //se crea una variable la cual se le asigna el texto que se escribe
        let validar= texto.match(/^[a-z]*$/); //se crea variable y en esta evalua que sea con los datos especificados
          if(!validar || validar ===0 ) 
          {
                alert("Solo permitido letras minúsculas y sin acentos")

                return true;
          }else{
            alert("Recuerda, sólo letras minúsculas y sin acentos");
          }
         
        }


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
 
 
 //function botonEncriptar() { //se declaro la fu
   /// document.getElementById("encriptar").style.color = "red";
  //}

 
 
 //function validarTexto(){

 //   let textoEscrito = document.querySelector(".textarea").value; //se crea variable texto escrito para decirle si es igual al ingresar texto y evaluar el objeto
   // let validador = textoEscrito.match(/^[a-z]*$/); 


 
