const textArea =    document.querySelector(".campo-text");
const mensaje =    document.querySelector(".mensaje");







function btnEncriptar(){
const textoEncriptado=encriptar(textArea.value)
let a=validarTexto(textoEncriptado)
if(a===false){
    reset()
}else{
    mensaje.value=textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage="none";
}
 
}




function btnDesencriptar(){
    const textoDesencriptado=desencriptar(textArea.value)
    let b=validarTexto(textoDesencriptado)
    if(b==false){
      reset()

    }else{
    mensaje.value=textoDesencriptado
    textArea.value="";
   
    mensaje.style.backgroundImage="none";
    }

    
    }


function encriptar (stringEncriptada){
    let matrizCodigo=[["e","enter"], ["i","mes"],["a","kse"],["o","tir"],["u","heas"]];
    stringEncriptada=stringEncriptada.toLowerCase()
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
return stringEncriptada;
}

function desencriptar(stringDesencriptar){

let matrizCodigo=[["e","enter"], ["i","mes"],["a","kse"],["o","tir"],["u","heas"]];
stringDesencriptar=stringDesencriptar.toLowerCase()
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar=stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
return stringDesencriptar;
}


function reset(){
    
    textArea.value="";
    mensaje.value="";
    mensaje.style.backgroundImage="";
    
   

}

function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value) ;
    reset()
    

}


function validarTexto(stringTexto){
let abecedario=(/["abcdefghijklmnñopqrstuvwxyz"]/g);

    if(stringTexto.match(abecedario)){
        return true;
       
      
    }else{

        alert("no se aceptan caracteres especiales y/o espacios vacios");
       
        return false;
    }
   
}