let display = document.querySelector("#text-current");

const mostrar = caracter =>{
    if(display.innerHTML.length<=15){
        display.innerHTML+=caracter;
        displat.innerHTML= convertirNumero(display.innerHTML);
    }
    else{
        alert("La cantidad maxima de numeros es 16")
    }
}

const resultado = () =>{
    display.innerHTML=convertirNumero(display.innerHTML);
}

const limpiar = () =>{
    display.innerHTML = "0";
}

const convertirNumero = cadena =>{
    let num=Number(cadena);
    let separar= num.toLocaleString("en");
    return separar;
}