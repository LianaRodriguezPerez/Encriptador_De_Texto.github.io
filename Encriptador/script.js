 function encriptar(){

    let frase = document.getElementById("validartexto").value.toLowerCase();
    let tituloMensaje = document.getElementById
    // i = para que tome las letras mayusculas y minusculas
    // g = tomae toda la linea 
    // m = tome encuenta multiples lineas

    let textoEncriptado = frase
                                .replace(/e/img, "enter")
                                .replace(/o/img, "ober")
                                .replace(/i/img, "imes")
                                .replace(/a/img, "ai")
                                .replace(/u/img, "ufat")

    if(frase.lengt !=0){
        frase= textoEncriptado;
    }

    document.getElementById("mensaje").innerHTML = textoEncriptado;
}
 
 
 
 
 
 
 
 
 //const textoValidar = document.querySelector(".textarea");
 //const mensaje = document.querySelector(".mensaje");
 //const copia = document.querySelector(".copiar");
 //copia.style.display = "none"


 //function validartexto(){
    // let textoEscrito = document.querySelector(".textarea").value;
     //let validar = textoEscrito.match(/^[a-z]*$/); 

        // if(!validar || validar === 0 ){

           //  alert("Solo son permitidas letras minúsculas y sin acentos")
             //location.reload(); //método para recargar la URL
             //return true;
        // }
 //}

//function btnEncriptar(){
  //  if(!validartexto()) {
    ///    const textoEncriptado = encriptar(textoValidar.value)
       // mensaje.value = textoEncriptado
        // mensaje.style.backgroundImage = "none"
         //textoValidar.value = "";
        // copia.style.display = "block"
    
    // }
 //}
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


 //function encriptar(stringEncriptada){
   //  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    // stringEncriptada = stringEncriptada.toLowerCase()

     //for(let i = 0; i < matrizCodigo.length; i++){
         //if(stringEncriptada.includes(matrizCodigo[i][0])){
          //   stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        // }

     //}
     //return stringEncriptada
 //}
 //function btnDesencriptar(){
    // const textoEncriptado = desencriptar(textarea.value)
    // mensaje.value = textoEncriptado
    // textarea.value = "";
    
 //}


 //function desencriptar(stringDesencriptada){
    // let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
     //stringDesencriptada = stringDesencriptada.toLowerCase()

     //for(let i = 0; i < matrizCodigo.length; i++){
        // if(stringDesencriptada.includes(matrizCodigo[i][1])){
           //  stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

         //}

     //}
     //return stringDesencriptada
 //}


