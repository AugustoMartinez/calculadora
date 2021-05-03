let valorIngresado1 = document.querySelector("#text-current");
let valorIngresado2 = document.querySelector('#history-text');

//Imprime los caracteres que ingresamos al apretar un boton
const mostrar = caracter =>{
    if(valorIngresado1.innerHTML.length<=15){
        valorIngresado1.innerHTML+=caracter;
        valorIngresado2.innerHTML += caracter;
        valorIngresado1.innerHTML= convertirNumero(valorIngresado1.innerHTML);
    }
    else{
        alert("La cantidad maxima de numeros es 16")
    }
}
//muestra el resultado de las operaciones realizadas
const resultado = () =>{
    valorIngresado1.innerHTML=convertirNumero(valorIngresado1.innerHTML);
}
//elimina todos los valores que se ingresaron
const limpiar = () =>{
    valorIngresado1.innerHTML = "";
}
//Les agrega una como a los numeros segun sean miles, millones, etc.
const convertirNumero = cadena =>{
    let num=Number(cadena.replace(/,/g,""));
    let separar= num.toLocaleString("en");
    return separar;
}
//borra solo 1 caracter del valor
const borrarUnValor = () =>{
    valorIngresado1.innerHTML= valorIngresado1.innerHTML.slice(0,-1);
}