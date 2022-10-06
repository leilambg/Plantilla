
// window.onload = function() {}
let numeroI = 0;
let resultadoI = 0;
let operacionI = 0;
let numerocalculado = 0;
//let lista= document.getElementById("operacion");
//lista.addEventListener("change",calcular,false);
/*function calcular(event){
 operacionI=event.target.value;
 alert(operacionI)
}*/

//-------------------------------------------
/*
operacion.addEventListener("change", calcular, false);

function calcular() {
  operacionI = operacion.value;
  numeroI = parseInt(dato.value);
  let numerocalculado = 0;

  if (operacionI == 1) {
    // Convertir de Decimal a Binario   
    numerocalculado = numeroI.toString(2)
    resultado.value = numerocalculado;
  }

  if (operacionI == 2) {
    // Convertir de Decimal a Octal     
    numerocalculado = numeroI.toString(8)
    resultado.value = numerocalculado;
  }
  if (operacionI == 3) {
    // Convertir de Decimal a Hexadecimal     
    numerocalculado = numeroI.toString(16)
    resultado.value = numerocalculado;
  }
  if (operacionI == 4) {
    // Convertir de Binario  a Decimal
    numerocalculado = parseInt(numeroI, 2)
    resultado.value = numerocalculado;
  }
  if (operacionI == 5) {
    // Convertir de Octal  a Decimal
    numerocalculado = parseInt(numeroI, 8)
    resultado.value = numerocalculado;
  }
  if (operacionI == 6) {
    // Convertir de Hexadecimal  a Decimal
    //Obtengo el hexadecimal sin convertir a numero int.
    numerocalculado = parseInt('A', 16)
    resultado.value = numerocalculado;
  }

} 
*/
operacion.addEventListener("change", calcular, false);

function calcular() {
  operacionI = operacion.value;
  numeroI = parseInt(dato.value);
  let numerocalculado = 0;

  switch (operacionI) {
    case "1":
      // Convertir de Decimal a Binario   
      numerocalculado = numeroI.toString(2)
      resultado.value = numerocalculado;
      break;
    case "2":
      // Convertir de Decimal a Octal     
      numerocalculado = numeroI.toString(8)
      resultado.value = numerocalculado;
      break;
    case "3":
      // Convertir de Decimal a Hexadecimal     
      numerocalculado = numeroI.toString(16)
      resultado.value = numerocalculado;
      break;
    case "4":
      // Convertir de Binario  a Decimal
      numerocalculado = parseInt(numeroI, 2)
      resultado.value = numerocalculado;
      break;
    case "5":
      // Convertir de Octal  a Decimal
      numerocalculado = parseInt(numeroI, 8)
      resultado.value = numerocalculado;
      break;
    case "6":
      // Convertir de Hexadecimal  a Decimal
      //Obtengo el hexadecimal sin convertir a numero int.
      numeroI=dato.value;
      numerocalculado = parseInt(numeroI, 16)
      resultado.value = numerocalculado;
      break;

    default:
      let comentario = document.querySelector("footer p")
      comentario = "<b style='color:gray'>conversión de opción errónea</b>"
      break;

  }
}